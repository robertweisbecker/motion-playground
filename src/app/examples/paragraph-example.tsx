import { KeyValue, Paragraph } from '@/components/paragraph';
import { Separator } from '@/components/ui/separator';

export function ParagraphExample() {
  return (
    <>
      <KeyValue label="hello">Hello</KeyValue>
      <Paragraph variant="lead">
        Lead - Aenean lacinia bibendum nulla sed consectetur. Maecenas sed
        diam eget risus varius blandit sit amet non magna.
      </Paragraph>
      <Paragraph variant="prose">
        Prose - Aenean lacinia bibendum nulla sed consectetur. Maecenas sed
        diam eget risus varius blandit sit amet non magna.
      </Paragraph>
      <Paragraph variant="body">
        Body - Aenean lacinia bibendum nulla sed consectetur. Maecenas sed
        diam eget risus varius blandit sit amet non magna.
      </Paragraph>
      <Paragraph variant="small">
        Body Small - Aenean lacinia bibendum nulla sed consectetur. Maecenas
        sed diam eget risus varius blandit sit amet non magna.
      </Paragraph>

      <Separator />
      <Paragraph variant="item">
        Item - Lorem ipsum dolor sit amet...
      </Paragraph>
      <Paragraph variant="label">
        Label - Aenean lacinia bibendum nulla sed consectetur. Maecenas sed
        diam eget risus varius blandit sit amet non magna.
      </Paragraph>
      <Paragraph variant="caption">
        Caption - Aenean lacinia bibendum nulla sed consectetur. Maecenas
        sed diam eget risus varius blandit sit amet non magna.
      </Paragraph>
      <Paragraph variant="error">
        Error - Aenean lacinia bibendum nulla sed consectetur. Maecenas sed
        diam eget risus varius blandit sit amet non magna.
      </Paragraph>
    </>
  );
}

