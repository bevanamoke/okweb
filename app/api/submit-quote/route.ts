export async function POST(request: Request) {
  try {
    const data = await request.json()

    // For now, log the quote request (you can integrate with email service, CRM, etc.)
    console.log("Quote request received:", data)

    return Response.json({
      success: true,
      message: "Quote request submitted successfully",
    })
  } catch (error) {
    console.error("Error processing quote:", error)
    return Response.json({ error: "Failed to submit quote" }, { status: 500 })
  }
}
