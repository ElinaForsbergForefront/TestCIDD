import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mocka Vite-mallens absoluta svg-paths
vi.mock("/vite.svg", () => ({ default: "svg-mock" }));
vi.mock("/src/assets/react.svg", () => ({ default: "svg-mock" }));

