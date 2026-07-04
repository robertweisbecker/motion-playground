import * as React from 'react';

type RenderProp = React.ReactElement | undefined;

export function resolveRenderProp(
  render: RenderProp | unknown,
  asChild: boolean | undefined,
  children: React.ReactNode,
): RenderProp {
  if (render && typeof render !== 'function' && React.isValidElement(render)) {
    return render;
  }
  if (asChild && React.isValidElement(children)) {
    return children;
  }
  return undefined;
}
