import React from "react";
import { Route, Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // implement a useUser to detect if the user is login

  return <Route>{children}</Route>;
};
