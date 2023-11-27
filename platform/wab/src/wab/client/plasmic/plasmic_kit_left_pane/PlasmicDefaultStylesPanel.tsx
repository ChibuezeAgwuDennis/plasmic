// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: nmt_YiclQJk

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import Select from "../../components/widgets/Select"; // plasmic-import: j_4IQyOWK2b/component
import Select__Option from "../../components/widgets/Select__Option"; // plasmic-import: rr-LWdMni2G/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import sty from "./PlasmicDefaultStylesPanel.module.css"; // plasmic-import: nmt_YiclQJk/css

import GlobesvgIcon from "../q_4_icons/icons/PlasmicIcon__Globesvg"; // plasmic-import: gcxY0Mwvj/icon
import PlussvgIcon from "../q_4_icons/icons/PlasmicIcon__Plussvg"; // plasmic-import: sQKgd2GNr/icon

createPlasmicElementProxy;

export type PlasmicDefaultStylesPanel__VariantMembers = {
  showPseudoClass: "showPseudoClass";
  isTargeting: "isTargeting";
};
export type PlasmicDefaultStylesPanel__VariantsArgs = {
  showPseudoClass?: SingleBooleanChoiceArg<"showPseudoClass">;
  isTargeting?: SingleBooleanChoiceArg<"isTargeting">;
};
type VariantPropType = keyof PlasmicDefaultStylesPanel__VariantsArgs;
export const PlasmicDefaultStylesPanel__VariantProps =
  new Array<VariantPropType>("showPseudoClass", "isTargeting");

export type PlasmicDefaultStylesPanel__ArgsType = {};
type ArgPropType = keyof PlasmicDefaultStylesPanel__ArgsType;
export const PlasmicDefaultStylesPanel__ArgProps = new Array<ArgPropType>();

export type PlasmicDefaultStylesPanel__OverridesType = {
  root?: p.Flex<"div">;
  selector?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  globalVariantSelectorContainer?: p.Flex<"div">;
  globalVariantSelect?: p.Flex<typeof Select>;
  option?: p.Flex<typeof Select__Option>;
  tagSelect?: p.Flex<typeof Select>;
  pseudoClassSelect?: p.Flex<typeof Select>;
  content?: p.Flex<"div">;
};

export interface DefaultDefaultStylesPanelProps {
  showPseudoClass?: SingleBooleanChoiceArg<"showPseudoClass">;
  isTargeting?: SingleBooleanChoiceArg<"isTargeting">;
  className?: string;
}

const $$ = {};

function PlasmicDefaultStylesPanel__RenderFunc(props: {
  variants: PlasmicDefaultStylesPanel__VariantsArgs;
  args: PlasmicDefaultStylesPanel__ArgsType;
  overrides: PlasmicDefaultStylesPanel__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "showPseudoClass",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.showPseudoClass,
      },
      {
        path: "isTargeting",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isTargeting,
      },
      {
        path: "globalVariantSelect.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "",
      },
      {
        path: "tagSelect.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
      },
      {
        path: "pseudoClassSelect.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_new_design_system_former_style_controls_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootisTargeting]: hasVariant(
            $state,
            "isTargeting",
            "isTargeting"
          ),
        }
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__iGLd
        )}
      >
        {
          "Define default typography styles; you can define different styles for different tags and responsive breakpoints."
        }
      </div>
      <p.Stack
        as={"div"}
        data-plasmic-name={"selector"}
        data-plasmic-override={overrides.selector}
        hasGap={true}
        className={classNames(projectcss.all, sty.selector, {
          [sty.selectorisTargeting]: hasVariant(
            $state,
            "isTargeting",
            "isTargeting"
          ),
        })}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBoxshowPseudoClass]: hasVariant(
              $state,
              "showPseudoClass",
              "showPseudoClass"
            ),
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__amsGc
            )}
          >
            {"Tag"}
          </div>
          <p.Stack
            as={"div"}
            data-plasmic-name={"globalVariantSelectorContainer"}
            data-plasmic-override={overrides.globalVariantSelectorContainer}
            hasGap={true}
            className={classNames(
              projectcss.all,
              sty.globalVariantSelectorContainer
            )}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___1UBnM,
                {
                  [sty.textisTargeting___1UBnMog7Mw]: hasVariant(
                    $state,
                    "isTargeting",
                    "isTargeting"
                  ),
                }
              )}
            >
              {"Target:"}
            </div>
            <Select
              data-plasmic-name={"globalVariantSelect"}
              data-plasmic-override={overrides.globalVariantSelect}
              hasIcon={true}
              icon={
                <GlobesvgIcon
                  className={classNames(projectcss.all, sty.svg__qOj9X)}
                  role={"img"}
                />
              }
              name={""}
              onChange={(...eventArgs) => {
                p.generateStateOnChangeProp($state, [
                  "globalVariantSelect",
                  "value",
                ])(eventArgs[0]);
              }}
              placeholder={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__oqmBw
                  )}
                >
                  {"Base"}
                </div>
              }
              size={"tiny"}
              value={p.generateStateValueProp($state, [
                "globalVariantSelect",
                "value",
              ])}
            >
              <Select__Option
                data-plasmic-name={"option"}
                data-plasmic-override={overrides.option}
                className={classNames("__wab_instance", sty.option)}
                value={"base"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jSaSm
                  )}
                >
                  {"Base"}
                </div>
              </Select__Option>
            </Select>
          </p.Stack>
        </div>
        <Select
          data-plasmic-name={"tagSelect"}
          data-plasmic-override={overrides.tagSelect}
          className={classNames("__wab_instance", sty.tagSelect, {
            [sty.tagSelectisTargeting]: hasVariant(
              $state,
              "isTargeting",
              "isTargeting"
            ),
          })}
          icon={
            <PlussvgIcon
              className={classNames(projectcss.all, sty.svg__kRhm1)}
              role={"img"}
            />
          }
          onChange={(...eventArgs) => {
            p.generateStateOnChangeProp($state, ["tagSelect", "value"])(
              eventArgs[0]
            );
          }}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ]}
          placeholder={
            hasVariant($state, "showPseudoClass", "showPseudoClass")
              ? "Select tag\u2026"
              : "Select tag\u2026"
          }
          type={"bordered"}
          value={p.generateStateValueProp($state, ["tagSelect", "value"])}
        />

        {(
          hasVariant($state, "showPseudoClass", "showPseudoClass")
            ? true
            : false
        ) ? (
          <Select
            data-plasmic-name={"pseudoClassSelect"}
            data-plasmic-override={overrides.pseudoClassSelect}
            className={classNames("__wab_instance", sty.pseudoClassSelect, {
              [sty.pseudoClassSelectshowPseudoClass]: hasVariant(
                $state,
                "showPseudoClass",
                "showPseudoClass"
              ),
            })}
            icon={
              <PlussvgIcon
                className={classNames(projectcss.all, sty.svg__iMz8C)}
                role={"img"}
              />
            }
            onChange={(...eventArgs) => {
              p.generateStateOnChangeProp($state, [
                "pseudoClassSelect",
                "value",
              ])(eventArgs[0]);
            }}
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
            ]}
            placeholder={"Select\u2026"}
            type={"bordered"}
            value={p.generateStateValueProp($state, [
              "pseudoClassSelect",
              "value",
            ])}
          />
        ) : null}
      </p.Stack>
      <div
        data-plasmic-name={"content"}
        data-plasmic-override={overrides.content}
        className={classNames(projectcss.all, sty.content, {
          [sty.contentisTargeting]: hasVariant(
            $state,
            "isTargeting",
            "isTargeting"
          ),
        })}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "selector",
    "freeBox",
    "globalVariantSelectorContainer",
    "globalVariantSelect",
    "option",
    "tagSelect",
    "pseudoClassSelect",
    "content",
  ],
  selector: [
    "selector",
    "freeBox",
    "globalVariantSelectorContainer",
    "globalVariantSelect",
    "option",
    "tagSelect",
    "pseudoClassSelect",
  ],
  freeBox: [
    "freeBox",
    "globalVariantSelectorContainer",
    "globalVariantSelect",
    "option",
  ],
  globalVariantSelectorContainer: [
    "globalVariantSelectorContainer",
    "globalVariantSelect",
    "option",
  ],
  globalVariantSelect: ["globalVariantSelect", "option"],
  option: ["option"],
  tagSelect: ["tagSelect"],
  pseudoClassSelect: ["pseudoClassSelect"],
  content: ["content"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  selector: "div";
  freeBox: "div";
  globalVariantSelectorContainer: "div";
  globalVariantSelect: typeof Select;
  option: typeof Select__Option;
  tagSelect: typeof Select;
  pseudoClassSelect: typeof Select;
  content: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDefaultStylesPanel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDefaultStylesPanel__VariantsArgs;
    args?: PlasmicDefaultStylesPanel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDefaultStylesPanel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDefaultStylesPanel__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDefaultStylesPanel__ArgProps,
          internalVariantPropNames: PlasmicDefaultStylesPanel__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicDefaultStylesPanel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDefaultStylesPanel";
  } else {
    func.displayName = `PlasmicDefaultStylesPanel.${nodeName}`;
  }
  return func;
}

export const PlasmicDefaultStylesPanel = Object.assign(
  // Top-level PlasmicDefaultStylesPanel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    selector: makeNodeComponent("selector"),
    freeBox: makeNodeComponent("freeBox"),
    globalVariantSelectorContainer: makeNodeComponent(
      "globalVariantSelectorContainer"
    ),
    globalVariantSelect: makeNodeComponent("globalVariantSelect"),
    option: makeNodeComponent("option"),
    tagSelect: makeNodeComponent("tagSelect"),
    pseudoClassSelect: makeNodeComponent("pseudoClassSelect"),
    content: makeNodeComponent("content"),

    // Metadata about props expected for PlasmicDefaultStylesPanel
    internalVariantProps: PlasmicDefaultStylesPanel__VariantProps,
    internalArgProps: PlasmicDefaultStylesPanel__ArgProps,
  }
);

export default PlasmicDefaultStylesPanel;
/* prettier-ignore-end */