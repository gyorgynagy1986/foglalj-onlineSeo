'use client';

import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { StreamChat, Channel as StreamChannel, Event } from 'stream-chat';
import {
  Chat,
  Channel,
  Window,
  MessageList,
  MessageInput,
  Thread,
  Streami18n,
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!;

// Csak biztonság kedvéért: legyen i18n példány (nem használunk ismeretlen kulcsokat)
const streami18n = new Streami18n({ language: 'hu' });

function getOrCreateVisitorId(): string {
  if (typeof window === 'undefined') return '';

  const storageKey = 'support_visitor_id';
  let visitorId = localStorage.getItem(storageKey);

  if (!visitorId) {
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    localStorage.setItem(storageKey, visitorId);
  }

  return visitorId;
}

function CustomEmptyState() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-6">
      <div className="text-5xl mb-4">💬</div>
      <h4 className="text-2xl font-semibold text-gray-700 mb-2">Még nincs üzenet</h4>
      <p className="text-gray-500">Írj nekünk, és hamarosan válaszolunk.</p>
    </div>
  );
}

export default function SupportChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [client, setClient] = useState<StreamChat | null>(null);
  const [channel, setChannel] = useState<StreamChannel | null>(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // message.new listener leiratkozás
  const unsubscribeRef = useRef<null | (() => void)>(null);

  // egyszer számoljuk ki kliens oldalon
  const visitorId = useMemo(() => {
    if (typeof window === 'undefined') return '';
    return getOrCreateVisitorId();
  }, []);

  const initChat = useCallback(async () => {
    // már inicializálva
    if (client && channel) return;

    setIsLoading(true);

    try {
      if (!apiKey) {
        throw new Error('Hiányzik a NEXT_PUBLIC_STREAM_API_KEY env változó.');
      }

      const res = await fetch('/api/stream/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visitorId }),
      });

      if (!res.ok) {
        throw new Error(`Token API hiba: ${res.status}`);
      }

      const data: { token: string; channelId: string } = await res.json();

      if (!data?.token || !data?.channelId) {
        throw new Error('Hiányzó token vagy channelId a token API válaszában.');
      }

      const chatClient = StreamChat.getInstance(apiKey);

      await chatClient.connectUser(
        { id: visitorId, name: 'Látogató' },
        data.token
      );

      const supportChannel = chatClient.channel('messaging', data.channelId);
      await supportChannel.watch();

      setClient(chatClient);
      setChannel(supportChannel);

      // induló unread
      setUnreadCount(supportChannel.countUnread());

      // ha volt korábbi listener, töröljük
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }

      const subscription = supportChannel.on('message.new', (event: Event) => {
        // csak más üzenete növelje, és csak ha csukva a widget
        if (event.user?.id !== visitorId && !isOpen) {
          setUnreadCount((prev) => prev + 1);
        }
      });

      unsubscribeRef.current = () => subscription.unsubscribe();
    } catch (error) {
      console.error('Chat init error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [client, channel, visitorId, isOpen]);

  const handleOpen = useCallback(async () => {
    setIsOpen(true);
    await initChat();

    // nyitáskor olvasottnak jelölünk
    setUnreadCount(0);
    try {
      await channel?.markRead();
    } catch (err) {
      console.error('markRead error:', err);
    }
  }, [initChat, channel]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // ha nyitott állapotban megjön a channel, olvasottnak jelölés
  useEffect(() => {
    if (!isOpen || !channel) return;
    setUnreadCount(0);
    channel.markRead().catch((err) => console.error('markRead error:', err));
  }, [isOpen, channel]);

  // unmount cleanup
  useEffect(() => {
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }

      if (client) {
        client.disconnectUser().catch((err) => console.error('disconnect error:', err));
      }
    };
  }, [client]);

  return (
    <>
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-20 right-6 w-14 h-14 animate-pulse bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50"
          aria-label="Chat megnyitása"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>

          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-2 right-6 max-w-96 w-[90%]  h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-999999 border border-gray-200">
          <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">💬</div>
              <div>
                <h3 className="font-semibold">Gyors segítség</h3>
                <p className="text-xs text-blue-100">Általában perceken belül válaszolunk</p>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="text-white/80 hover:text-white"
              aria-label="Bezárás"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-hidden">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
              </div>
            ) : client && channel ? (
              <Chat client={client} i18nInstance={streami18n} theme="str-chat__theme-light">
                <Channel
                  channel={channel}
                  EmptyStateIndicator={CustomEmptyState}
                >
                  <Window>
                    <MessageList />
                    <MessageInput
                      additionalTextareaProps={{ placeholder: 'Írj üzenetet...' }}
                    />
                  </Window>
                  <Thread />
                </Channel>
              </Chat>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500 text-sm">
                Nem sikerült betölteni a chatet.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
