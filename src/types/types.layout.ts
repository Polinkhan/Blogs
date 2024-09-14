// ------------------------------------------
// Imports
// ------------------------------------------
import { ReactNode } from "react";

// ------------------------------------------
// Types
// ------------------------------------------
export interface DefaultLayoutProps {
  children: ReactNode;
}

export interface LayoutProps extends DefaultLayoutProps {}
export interface BodyLayoutProps extends DefaultLayoutProps {}
export interface RootLayoutProps extends DefaultLayoutProps {}
