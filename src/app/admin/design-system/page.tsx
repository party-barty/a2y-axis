import type { Metadata } from "next";
import DesignSystem from "@/components/design-system/DesignSystem";

export const metadata: Metadata = {
  title: "Design System — A2Y Axis",
  description:
    "Reference page for every visual primitive in the app, driven by the locked --axis-* brand tokens.",
};

// `.ds-scope` is load-bearing: every base rule in styles/design-system.css is
// scoped to it, so the design system cannot restyle the rest of the app.
export default function DesignSystemPage() {
  return (
    <div className="ds-scope">
      <DesignSystem />
    </div>
  );
}
