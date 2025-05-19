import type { Patient } from "../components/Dashboard/PatientTable";

export const transformFHIRPatients = (fhirPatients: any[]): Patient[] => {
  return fhirPatients.map((entry) => {
    const resource = entry.resource;

    const nameObj = resource.name?.[0] || {};
    const fullName =
      nameObj.text ||
      `${nameObj.given?.join(" ") || ""} ${nameObj.family || ""}`.trim();

    const officialIdentifier = resource.identifier?.find(
      (id: any) => id.use === "official"
    )?.value;
    const usualIdentifier = resource.identifier?.find(
      (id: any) => id.use === "usual"
    )?.value;

    const addresses = (resource.address || []).map((addr: any) => ({
      use: addr.use,
      type: addr.type,
      line: (addr.line || []).join(", "),
      city: addr.city,
      state: addr.state,
      postalCode: addr.postalCode,
      country: addr.country,
    }));

    return {
      id: resource.id,
      name: fullName,
      officialIdentifier,
      usualIdentifier,
      addresses,
    };
  });
};
