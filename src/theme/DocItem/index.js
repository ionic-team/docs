/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import DocDemo from "@theme/DocDemo";
import DocPaginator from "@theme/DocPaginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import Seo from "@theme/Seo";
import TOC from "@theme/TOC";
import EditThisPage from "@theme/EditThisPage";
import clsx from "clsx";
import styles from "./styles.module.css";
import { useActivePlugin, useVersions } from "@theme/hooks/useDocs";
import { Heading } from "@ionic-internal/ionic-ds";
import { ThemeProvider } from "styled-components";

function DocItem(props) {
  const { content: DocContent, versionMetadata } = props;
  const { metadata, frontMatter, contentTitle } = DocContent;
  const {
    description,
    title,
    permalink,
    editUrl,
    lastUpdatedAt,
    lastUpdatedBy,
  } = metadata;
  const {
    metaTitle,
    image,
    keywords,
    hide_title: hideTitle,
    hide_table_of_contents: hideTableOfContents,
    demoUrl,
    demoSourceUrl,
  } = frontMatter;

  const { pluginId } = useActivePlugin({
    failfast: true,
  });
  const versions = useVersions(pluginId); // If site is not versioned or only one version is included
  // we don't show the version badge
  // See https://github.com/facebook/docusaurus/issues/3362

  const showVersionBadge = versions.length > 1; // We only add a title if:
  // - user asks to hide it with frontmatter
  // - the markdown content does not already contain a top-level h1 heading

  const finalTitle = metaTitle ? metaTitle : title;
  const pageCSSClass = `page-${permalink
    .replace(/\/$/, "")
    .replace(/\//g, "-")}`;
  return (
    <>
      <Seo
        {...{
          title: finalTitle,
          description,
          keywords,
          image
        }}
      />
      <div className={clsx("", pageCSSClass, styles.docItemWrapper)}>
        <div className={styles.docItemMain}>
          <DocVersionBanner versionMetadata={versionMetadata} />
          <div className={styles.docItemContainer}>
            <ThemeProvider
              theme={{
                name: "editorial",
                prevHeading: contentTitle ? null : "h1",
              }}
            >
              <article>
                {showVersionBadge && (
                  <div>
                    <span className="badge badge--secondary">
                      Version: {version.label}
                    </span>
                  </div>
                )}
                {!contentTitle && !hideTitle && (
                  <header>
                    <Heading level={1} className={styles.docTitle}>
                      {title}
                    </Heading>
                  </header>
                )}

                {!hideTableOfContents && DocContent.toc && demoUrl && (
                  <div
                    className={clsx("docDemoWrapper", styles.docDemoWrapper)}
                  >
                    <DocDemo url={demoUrl} source={demoSourceUrl} />
                  </div>
                )}

                <div className="markdown">
                  <DocContent />
                </div>
              </article>
            </ThemeProvider>
            <div
              className={clsx(
                styles.docItemPaginator,
                "margin-top--xl",
                "margin-bottom--xl"
              )}
            >
              <DocPaginator metadata={metadata} />
            </div>

            {(editUrl || lastUpdatedAt || lastUpdatedBy) && (
              <div className="margin-vert--lg">
                <div className="row">
                  <div className="col">
                    {editUrl && <EditThisPage editUrl={editUrl} />}
                  </div>
                  {(lastUpdatedAt || lastUpdatedBy) && (
                    <div className="col text--right">
                      <em>
                        <small>
                          Last updated{" "}
                          {lastUpdatedAt && (
                            <>
                              on{" "}
                              <time
                                dateTime={new Date(
                                  lastUpdatedAt * 1000
                                ).toISOString()}
                                className={styles.docLastUpdatedAt}
                              >
                                {new Date(
                                  lastUpdatedAt * 1000
                                ).toLocaleDateString()}
                              </time>
                              {lastUpdatedBy && " "}
                            </>
                          )}
                          {lastUpdatedBy && (
                            <>
                              by <strong>{lastUpdatedBy}</strong>
                            </>
                          )}
                          {process.env.NODE_ENV === "development" && (
                            <div>
                              <small>
                                {" "}
                                (Simulated during dev for better perf)
                              </small>
                            </div>
                          )}
                        </small>
                      </em>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {!hideTableOfContents && DocContent.toc ? (
          <div className={styles.docItemAside}>
            <TOC toc={DocContent.toc} />
          </div>
        ) : (
          demoUrl && (
            <div
              className={clsx(
                "docDemoWrapper",
                styles["docDemoWrapper--noToc"],
                styles.docDemoWrapper
              )}
            >
              <DocDemo url={demoUrl} source={demoSourceUrl} />
            </div>
          )
        )}
      </div>
    </>
  );
}

export default DocItem;
