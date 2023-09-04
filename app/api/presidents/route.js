import { NextResponse } from 'next/server'

const data = [
    { name: "Soshina3", period: "2005-" }
]

export async function GET(request) {
    return NextResponse.json(data)
}
