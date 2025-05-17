import path from "path";
import { google } from "googleapis";

const __dirname = path.resolve();
// Import the required libraries
const docs = google.docs("v1");

async function runSample() {
  const auth = new google.auth.GoogleAuth({
    projectId: "fullstack-course-454410",
    keyFile: path.join(__dirname, "credentials.json"),
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
  google.options({ auth });
  const drive = google.drive({ version: "v3", auth });

  // Upload a file to Google Drive
  const folderMetadata = {
    name: "TestFolder",
    mimeType: "application/vnd.google-apps.folder",
  };

  const folder = await drive.files.create({
    requestBody: folderMetadata,
    fields: "id, name, webViewLink",
  });
  console.log("Folder ID:", folder);
}

runSample().catch(console.error);
