import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, role } = body;

    if (!email || !role) {
      return NextResponse.json(
        { error: "Email and role are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!["candidate", "employer"].includes(role)) {
      return NextResponse.json(
        { error: "Role must be candidate or employer" },
        { status: 400 }
      );
    }

    const headersList = await headers();
    const forwardedFor = headersList.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0] || "unknown";

    const entry = {
      email,
      role,
      ip,
      createdAt: new Date().toISOString(),
    };

    console.log("Waitlist entry:", JSON.stringify(entry));

    return NextResponse.json({
      success: true,
      message: "You're in. We'll launch in 4 weeks.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
