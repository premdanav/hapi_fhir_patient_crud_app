# Patient Management Dashboard

As part of a healthcare software tech entusiast, This is a
vite-react-ts Patient Management Dashboard for clinical staff.
This application integrates with the HAPI FHIR public server
and allow users to perform CRUD operations on Patient records in compliance
with the FHIR R4 standard.

🏗️ Features to Implement

1. List Patients
   Fetch and display a paginated list of patients from https://hapi.fhir.org/baseR4/Patient
   Display key patient fields: Name, Gender, Birth Date, and ID
   Add a search bar to filter patients by name

2. Create New Patient
   Form to create a new patient
   Required fields:
   First Name, Last Name
   Gender (Dropdown)
   Birth Date (Date input)
   On submission, send a POST request to the FHIR server

3. Update Patient
   Edit an existing patient’s information
   Prefill the form with existing values by fetching GET /Patient/{id}
   On save, send a PUT request to the server

4. Delete Patient
   Add a Delete button in the patient list
   Use DELETE /Patient/{id} to remove the record from the FHIR server

5. Patient Details View
   On clicking a patient's name, show a detailed view
   (name, gender, birth date, address, etc.)
