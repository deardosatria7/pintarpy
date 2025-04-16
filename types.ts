// This file contains all the types used in the application
import { JSX } from "react";

export type LessonSteps = {
  id: number;
  title: string;
  content: JSX.Element;
};
