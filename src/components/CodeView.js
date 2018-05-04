import * as React from "react";
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from "react-live";
import { css } from "glamor";
import glamorous from "glamorous";

const LiveEditWrapper = glamorous.div({
  display: "flex",
  flexDirection: "column",
});

const InlineCode = glamorous.code({
  display: "inline",
  paddingLeft: "4px",
  paddingRight: "4px",
  fontSize: "15px",
  fontFamily: "Dank Mono, monospace",
  backgroundColor: "rgba(180,180,180,0.8)",
});

export const CodeView = ({
  complex = "",
  sample = "",
  children,
  className,
  ...rest
}) => {
  const isInlineCode = !className;

  if (isInlineCode) {
    return <InlineCode>{children}</InlineCode>;
  }

  const noInline = !!complex.length;

  const code =
    sample.length > 0
      ? require(`!raw-loader!../samples/${sample}`)
      : noInline
        ? complex
        : children[0];

  return (
    <LiveProvider
      mountStylesheet={false}
      code={code}
      noInline={noInline}
    >
      <LiveEditor
        contentEditable={false}
        className={className}
        css={{
          minWidth: "300px",
          flex: 1,
          overflow: "auto",
          width: "100%",
          fontFamily: "Dank Mono, monospace",
        }}
      />
    </LiveProvider>
  );
};
