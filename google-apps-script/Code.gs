/**
 * Simple Google Apps Script for ATCPL Website Forms
 * 
 * Setup:
 * 1. Replace the SPREADSHEET_IDs below with your actual spreadsheet IDs
 * 2. Deploy as Web App (Execute as: Me, Who has access: Anyone)
 * 3. Copy the deployment URL to your .env file
 */

// ============================================================================
// CONFIGURATION - UPDATE THESE VALUES
// ============================================================================

const SPREADSHEET_IDS = {
  DEMO: "YOUR_DEMO_SPREADSHEET_ID_HERE",
  BROCHURE: "YOUR_BROCHURE_SPREADSHEET_ID_HERE"
};

// ============================================================================
// MAIN HANDLERS
// ============================================================================

// Handle GET requests (for CORS preflight)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ATCPL Forms API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Handle POST requests
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Route based on source field
    if (data.source === 'brochure') {
      saveBrochureDownload(data);
    } else {
      saveDemoRequest(data);
    }
    
    // Return success with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================================================
// SAVE DEMO REQUEST
// ============================================================================

function saveDemoRequest(data) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_IDS.DEMO);
  let sheet = spreadsheet.getSheetByName("Demo Requests");
  
  // Create sheet with headers if it doesn't exist
  if (!sheet) {
    sheet = spreadsheet.insertSheet("Demo Requests");
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Company', 'Industry', 'Solution', 'Message', 'Source']);
  }
  
  // Add the data
  sheet.appendRow([
    new Date(),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.company || '',
    data.industry || '',
    data.solution || '',
    data.message || '',
    data.source || ''
  ]);
}

// ============================================================================
// SAVE BROCHURE DOWNLOAD
// ============================================================================

function saveBrochureDownload(data) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_IDS.BROCHURE);
  let sheet = spreadsheet.getSheetByName("Brochure Downloads");
  
  // Create sheet with headers if it doesn't exist
  if (!sheet) {
    sheet = spreadsheet.insertSheet("Brochure Downloads");
    sheet.appendRow(['Timestamp', 'Email', 'Phone', 'Solution', 'File Name']);
  }
  
  // Add the data
  sheet.appendRow([
    new Date(),
    data.email || '',
    data.phone || '',
    data.solution || '',
    data.fileName || ''
  ]);
}
