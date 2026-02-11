import { Tag } from '@/components/tag';

export function TagExample() {
  return (
    <>
      <Tag
        showAvatar
        avatarInitials="M"
        onClose={() => {
          alert('Remove Tag 1');
        }}
      >
        mga@email.com
      </Tag>
      <div className="flex gap-1 rounded-lg border bg-background p-1">
        <Tag>Apples</Tag>
        <Tag>Bananas</Tag>
        <Tag>Oranges</Tag>
        <Tag>Pomegranates</Tag>
      </div>
    </>
  );
}

