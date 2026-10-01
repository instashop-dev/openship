// Deployz environment-variable qualification (instashop-dev fork only).
// Each read below changes shape in a later commit: renamed, removed,
// required -> optional, optional -> required.
const renameMe = new URL(process.env.ENVQUAL_RENAME_ME_URL);
const toBeRemoved = process.env.ENVQUAL_TO_BE_REMOVED ?? "built-in-removable";
const requiredToOptional = new URL(process.env.ENVQUAL_REQUIRED_TO_OPTIONAL_URL);
const optionalToRequired = process.env.ENVQUAL_OPTIONAL_TO_REQUIRED ?? "built-in-default";

export const envqual = {
  renameMe: renameMe.host,
  toBeRemoved,
  requiredToOptional: requiredToOptional.host,
  optionalToRequired,
};
