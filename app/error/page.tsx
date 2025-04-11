"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { AlertCircle, ArrowLeft, Home, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ErrorPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [errorInfo, setErrorInfo] = useState({
    title: "An error occurred",
    message: "Something went wrong. Please try again later.",
    code: "500",
    showRefresh: true,
  });

  useEffect(() => {
    // Get error parameters from URL
    const message = searchParams.get("message");
    const title = searchParams.get("title");
    const code = searchParams.get("code");
    const showRefresh = searchParams.get("showRefresh") !== "false";

    // Update error info with URL parameters if they exist
    setErrorInfo({
      title: title || errorInfo.title,
      message: message || errorInfo.message,
      code: code || errorInfo.code,
      showRefresh,
    });
  }, [searchParams]);

  const handleRefresh = () => {
    // Get the return URL from the parameters or default to the homepage
    const returnUrl = searchParams.get("returnUrl") || "/";
    router.push(returnUrl);
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-black p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold tracking-tight">
              Error {errorInfo.code}
            </CardTitle>
            <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            {errorInfo.title}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorInfo.message}</AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={handleGoBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <div className="flex flex-wrap gap-2 w-full space-x-2 sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            {errorInfo.showRefresh && (
              <Button className="w-full sm:w-auto" onClick={handleRefresh}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
