import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

export interface Patient {
  id: string;
  name: string;
  officialIdentifier?: string;
  usualIdentifier?: string;
  addresses: {
    use: string;
    type: string;
    line: string;
    city: string;
    state?: string;
    postalCode: string;
    country?: string;
  }[];
}

export interface PatientTableProps {
  patients: Patient[];
}

const PatientTable: React.FC<PatientTableProps> = ({ patients }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="patient table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Patient ID</b>
            </TableCell>
            <TableCell>
              <b>Full Name</b>
            </TableCell>
            <TableCell>
              <b>Official Identifier</b>
            </TableCell>
            <TableCell>
              <b>Usual Identifier</b>
            </TableCell>
            <TableCell>
              <b>Addresses</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>{patient.id}</TableCell>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.officialIdentifier || "-"}</TableCell>
              <TableCell>{patient.usualIdentifier || "-"}</TableCell>
              <TableCell>
                {patient.addresses.map((addr, index) => (
                  <div key={index} style={{ marginBottom: "8px" }}>
                    <Typography variant="body2">
                      <b>Use:</b> {addr.use}, <b>Type:</b> {addr.type}
                    </Typography>
                    <Typography variant="body2">
                      {addr.line}, {addr.city}, {addr.state || ""}{" "}
                      {addr.postalCode}, {addr.country || ""}
                    </Typography>
                  </div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PatientTable;
