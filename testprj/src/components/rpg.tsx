/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ioF8N0XR2os
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

export function rpg() {
  return (
    <div className="bg-[#1a1a1a] text-white font-bold">
      <div className="flex items-center justify-between px-4 py-2 bg-[#2b2b2b]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <HeartIcon className="w-6 h-6 text-[#ff6b6b]" />
            <span>100/100</span>
          </div>
          <div className="flex items-center gap-2">
            <DropletIcon className="w-6 h-6 text-[#4dd0e1]" />
            <span>50/50</span>
          </div>
          <div className="flex items-center gap-2">
            <StarIcon className="w-6 h-6 text-[#ffd700]" />
            <span>500</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <SwordIcon className="w-6 h-6" />
            <span className="sr-only">Attack</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShieldIcon className="w-6 h-6" />
            <span className="sr-only">Defend</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ZapIcon className="w-6 h-6" />
            <span className="sr-only">Cast Spell</span>
          </Button>
        </div>
      </div>
      <ScrollArea className="h-[400px] p-4 space-y-4">
        <div className="flex items-start gap-4">
          <Avatar className="w-8 h-8 border-2 border-[#4dd0e1]">
            <AvatarImage src="/placeholder-user.jpg" alt="Warrior" />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
          <div className="bg-[#2b2b2b] rounded-lg p-4 max-w-[80%]">
            <p>
              Prepare for battle, adventurer! The dark forces gather, and we
              must stand strong.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-end">
          <div className="bg-[#2b2b2b] rounded-lg p-4 max-w-[80%]">
            <p>
              I am ready, my friend. Let us vanquish these foes and restore
              peace to the land!
            </p>
          </div>
          <Avatar className="w-8 h-8 border-2 border-[#ff6b6b]">
            <AvatarImage src="/placeholder-user.jpg" alt="Mage" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-start gap-4">
          <Avatar className="w-8 h-8 border-2 border-[#ffd700]">
            <AvatarImage src="/placeholder-user.jpg" alt="Archer" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div className="bg-[#2b2b2b] rounded-lg p-4 max-w-[80%]">
            <p>My bow is ready, let us strike swiftly and with precision!</p>
          </div>
        </div>
      </ScrollArea>
      <div className="bg-[#2b2b2b] px-4 py-2 flex items-center gap-2">
        <Textarea
          placeholder="Type your message..."
          className="bg-[#1a1a1a] rounded-lg flex-1 border-none focus:ring-0 focus:outline-none"
        />
        <Button variant="ghost" size="icon">
          <SendIcon className="w-6 h-6" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  );
}

function DropletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function SwordIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
      <line x1="13" x2="19" y1="19" y2="13" />
      <line x1="16" x2="20" y1="16" y2="20" />
      <line x1="19" x2="21" y1="21" y2="19" />
    </svg>
  );
}

function ZapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}
