import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import ProgressBarExercise from "./ProgressBarExercise";

describe("<Solution />", () => {
  test("renders", async () => {
    render(<ProgressBarExercise />);

    const startButton = screen.getByRole("button", {
      name: /start request/i,
    });

    userEvent.click(startButton);

    const progressBar = await screen.findByTestId("progressBar");

    expect(progressBar).toBeVisible();
  });

  test("should finish and disappear on finish click", async () => {
    render(<ProgressBarExercise />);

    const startButton = screen.getByRole("button", {
      name: /start request/i,
    });

    userEvent.click(startButton);

    const progressBar = await screen.findByTestId("progressBar");

    expect(progressBar).toBeVisible();

    const finishRequestButton = screen.getByRole("button", {
      name: /finish request/i,
    });

    userEvent.click(finishRequestButton);

    expect(progressBar).not.toBeVisible();
  });
});
