import { NextResponse } from 'next/server'
import sql from 'mssql'

const config = {
  user: 'abhishek',
  password: 'abhishek321',
  server: '182.18.162.232',
  database: 'abhishekmoshi',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
}

export async function POST(req) {
  try {
    const data = await req.json()

    const pool = await sql.connect(config)

    await pool.request()
      .input('parentName', sql.NVarChar, data.parentName || null)
      .input('childName', sql.NVarChar, data.childName || null)
      .input('currentSchool', sql.NVarChar, data.currentSchool || null)
      .input('mobileNumber', sql.NVarChar, data.mobileNumber || null)
      .input('email', sql.NVarChar, data.email || null)
      .input('grade', sql.NVarChar, data.grade || null)
      .input('recordStatus', sql.Char, 'A') // default status
      .input('createdOn', sql.DateTime, new Date())
      .query(`
        INSERT INTO Admissions
        (ParentName, ChildName, CurrentSchool, MobileNumber, Email, Grade, RecordStatus, CreatedOn)
        VALUES
        (@parentName, @childName, @currentSchool, @mobileNumber, @email, @grade, @recordStatus, @createdOn)
      `)

    return NextResponse.json({ message: 'Form submitted successfully' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 })
  }
}
