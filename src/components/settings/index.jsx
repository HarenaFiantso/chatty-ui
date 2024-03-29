import ThemeColorPresets from './ThemeColorPresets';
import ThemeContrast from './ThemeContrast';
import ThemeLocalization from './ThemeLocalization';
import ThemeRtlLayout from './ThemeRtlLayout';
import SettingsDrawer from './drawer';
import PropTypes from 'prop-types';

ThemeSettings.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ThemeSettings({ children }) {
  return (
    <ThemeColorPresets>
      <ThemeContrast>
        <ThemeLocalization>
          <ThemeRtlLayout>
            {children}
            <SettingsDrawer />
          </ThemeRtlLayout>
        </ThemeLocalization>
      </ThemeContrast>
    </ThemeColorPresets>
  );
}
