// Deployz environment-variable qualification (instashop-dev fork only).
// v2: renamed, removed, required -> optional, optional -> required.
const renamed = new URL(process.env.ENVQUAL_RENAMED_URL);
const requiredToOptional = new URL(process.env.ENVQUAL_REQUIRED_TO_OPTIONAL_URL ?? "https://default.envqual.example.com/r2o");
const optionalToRequired = new URL(process.env.ENVQUAL_OPTIONAL_TO_REQUIRED);

export const envqual = {
  renamed: renamed.host,
  requiredToOptional: requiredToOptional.host,
  optionalToRequired: optionalToRequired.host,
};
