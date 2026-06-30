import {
  ChainOfThought,
  ChainOfThoughtContent,
  ChainOfThoughtHeader,
  ChainOfThoughtImage,
  ChainOfThoughtSearchResult,
  ChainOfThoughtSearchResults,
  ChainOfThoughtStep,
} from '@/components/experimental/chain-of-thought';
import { ImageIcon, SearchIcon } from 'lucide-react';
import Image from 'next/image';

export const ChainOfThoughtExample = () => (
  <ChainOfThought defaultOpen>
    <ChainOfThoughtHeader />
    <ChainOfThoughtContent>
      <ChainOfThoughtStep
        icon={SearchIcon}
        label="Searching for profiles for Hayden Bleasel"
        status="complete"
      >
        <ChainOfThoughtSearchResults>
          {[
            'https://www.x.com',
            'https://www.instagram.com',
            'https://www.github.com',
          ].map((website) => (
            <ChainOfThoughtSearchResult key={website}>
              {new URL(website).hostname}
            </ChainOfThoughtSearchResult>
          ))}
        </ChainOfThoughtSearchResults>
      </ChainOfThoughtStep>

      <ChainOfThoughtStep
        icon={ImageIcon}
        label="Found the profile photo for Hayden Bleasel"
        status="complete"
      >
        <ChainOfThoughtImage caption="Image caption">
          <Image
            src="https://avatar.vercel.sh/mg"
            alt="Example generated image"
            width={150}
            height={150}
            className="aspect-square h-[150px] border object-cover"
          />
        </ChainOfThoughtImage>
      </ChainOfThoughtStep>

      <ChainOfThoughtStep
        label="Hayden Bleasel is an Australian product designer, software engineer, and founder. He is currently based in the United States working for Vercel, an American cloud application company."
        status="complete"
      />

      <ChainOfThoughtStep
        icon={SearchIcon}
        label="Searching for recent work..."
        status="active"
      >
        <ChainOfThoughtSearchResults>
          {['https://www.github.com', 'https://www.dribbble.com'].map(
            (website) => (
              <ChainOfThoughtSearchResult key={website}>
                {new URL(website).hostname}
              </ChainOfThoughtSearchResult>
            ),
          )}
        </ChainOfThoughtSearchResults>
      </ChainOfThoughtStep>
    </ChainOfThoughtContent>
  </ChainOfThought>
);
