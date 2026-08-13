import PropTypes from "prop-types";

export default function TenantSwitcher({ tenantId, onSwitch }) {
  return (
    <select value={tenantId} onChange={(e) => onSwitch(e.target.value)}>
      <option value="acme">Acme (self-serve)</option>
    </select>
  );
}

TenantSwitcher.propTypes = {
  tenantId: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};
