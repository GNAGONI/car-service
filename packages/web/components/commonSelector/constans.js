const colours = {
  grayLight: '#dddee0',
  grayLight2: '#f4f4f5',
  gray: '#F2F2F3',
  grayDark: '#19212d',
  grayMiddle: '#d5d2d0',
  grayLight3: '#a3a6ab',
  grayDisabled: '#d1d3d5',
};

export const liteTheme = {
  container: provided => ({
    ...provided,
    fontSize: '.75rem',
    lineHeight: '1rem',
    fontWeight: 500,
    maxHeight: 38,
    width: '100%',
  }),

  placeholder: provided => ({
    ...provided,
    color: colours.grayDark,
  }),

  option: (provided, { isSelected, isFocused }) => ({
    ...provided,
    padding: 6,
    height: 30,
    fontSize: 12,
    color: colours.grayDark,
    background: isSelected || isFocused ? colours.grayLight : 'transparent',
  }),

  valueContainer: provided => ({
    ...provided,
    maxHeight: 38,
  }),

  indicatorSeparator: provided => ({
    ...provided,
    width: 0,
  }),

  menuList: provided => ({
    ...provided,
    padding: 0,
  }),

  menu: provided => ({
    ...provided,
    background: colours.gray,
    borderRadius: 0,
    boxShadow: 'none',
    margin: 0,
  }),

  control: provided => ({
    ...provided,
    maxHeight: 38,
    borderRadius: 0,
    border: 'none',
    boxShadow: '0 !important',
  }),
};

const liteAbsoluteTheme = {
  ...liteTheme,

  container: () => ({
    ...liteTheme.container,
    width: '100%',
    zIndex: '901',
    border: `1px solid ${colours.grayLight}`,
    borderRadius: '2px',
  }),
};

const partnerPortalTheme = {
  container: provided => ({
    ...provided,
    fontSize: '.75rem',
    lineHeight: '1rem',
    fontWeight: 500,
    maxHeight: 40,
    width: '100%',
  }),

  option: (provided, { isSelected, isFocused }) => ({
    ...provided,
    padding: 6,
    height: 35,
    fontSize: 12,
    color: colours.grayDark,
    background: isSelected || isFocused ? colours.grayLight : 'transparent',
  }),

  valueContainer: provided => ({
    ...provided,
    maxHeight: 40,
  }),

  indicatorSeparator: provided => ({
    ...provided,
    width: 0,
  }),

  menuList: provided => ({
    ...provided,
    padding: 0,
  }),

  menu: provided => ({
    ...provided,
    background: colours.gray,
    borderRadius: 0,
    boxShadow: 'none',
    margin: 0,
  }),

  control: (provided, { isFocused }) => ({
    ...provided,
    maxHeight: 40,
    borderRadius: '3px',
    borderBottomLeftRadius: isFocused ? 0 : '3px',
    borderBottomRightRadius: isFocused ? 0 : '3px',
    background: colours.grayLight2,
    border: isFocused ? '1px solid transparent' : `1px solid #${colours.grayMiddle}`,
    boxShadow: '0 !important',
    '&:hover': {
      border: isFocused ? '1px solid transparent' : `1px solid #${colours.grayMiddle}`,
    },
  }),
};

const longAuctionTheme = {
  container: provided => ({
    ...provided,
    width: '100%',
    color: colours.grayDark,
  }),

  placeholder: provided => ({
    ...provided,
    color: colours.grayLight3,
  }),

  option: (provided, { isSelected, isFocused }) => ({
    ...provided,
    paddingLeft: 22,
    height: 35,
    fontSize: 12,
    color: colours.grayDark,
    background: isSelected || isFocused ? colours.grayLight : 'transparent',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  }),

  dropdownIndicator: provided => ({
    ...provided,
    color: colours.grayDark,
    width: 31,
  }),

  valueContainer: provided => ({
    ...provided,
    position: 'static',
    fontSize: 18,
    height: 62,
    padding: '18px 22px 18px 22px',
    color: colours.grayDark,
    fontWeight: 500,
  }),

  singleValue: provided => ({
    ...provided,
    position: 'static',
    color: colours.grayDark,
    transform: 'translateY(0)',
  }),

  indicatorSeparator: provided => ({
    ...provided,
    width: 0,
  }),

  menuList: provided => ({
    ...provided,
    padding: 0,
  }),

  menu: provided => ({
    ...provided,
    background: colours.grayLight2,
    borderRadius: 0,
    border: `1px solid ${colours.grayMiddle}`,
    borderTop: 'none',
    boxShadow: 'none',
    margin: 0,
    zIndex: '51',
  }),

  control: (provided, { isFocused, isDisabled }) => ({
    ...provided,
    borderRadius: '3px',
    borderBottomLeftRadius: isFocused ? 0 : '3px',
    borderBottomRightRadius: isFocused ? 0 : '3px',
    color: colours.grayDark,
    background: isDisabled ? colours.grayDisabled : colours.grayLight2,
    border: `1px solid ${colours.grayMiddle}`,
    boxShadow: '0 !important',
    '&:hover': {
      border: isFocused ? `1px solid ${colours.grayMiddle}` : `1px solid #${colours.grayMiddle}`,
    },
  }),
};

const editProfileDateTheme = {
  container: provided => ({
    ...provided,
    width: '100%',
    color: colours.grayDark,
  }),

  placeholder: provided => ({
    ...provided,
    color: colours.grayLight3,
  }),

  option: (provided, { isSelected, isFocused }) => ({
    ...provided,
    paddingLeft: 22,
    height: 35,
    fontSize: 12,
    color: colours.grayDark,
    background: isSelected || isFocused ? colours.grayLight : 'transparent',
  }),

  dropdownIndicator: provided => ({
    ...provided,
    color: colours.grayDark,
    width: 31,
  }),

  valueContainer: provided => ({
    ...provided,
    position: 'static',
    fontSize: 18,
    height: 62,
    padding: '18px 40px 18px 22px',
    color: colours.grayDark,
    fontWeight: 500,
  }),

  indicatorSeparator: provided => ({
    ...provided,
    width: 0,
  }),

  menuList: provided => ({
    ...provided,
    padding: 0,
  }),

  menu: provided => ({
    ...provided,
    background: colours.grayLight2,
    borderRadius: 0,
    border: `1px solid ${colours.grayMiddle}`,
    borderTop: 'none',
    boxShadow: 'none',
    margin: 0,
    zIndex: '51',
  }),

  control: (provided, { isFocused }) => ({
    ...provided,
    borderRadius: '3px',
    borderBottomLeftRadius: isFocused ? 0 : '3px',
    borderBottomRightRadius: isFocused ? 0 : '3px',
    color: colours.grayDark,
    background: colours.grayLight2,
    border: `1px solid ${colours.grayMiddle}`,
    boxShadow: '0 !important',
    '&:hover': {
      border: isFocused ? `1px solid ${colours.grayMiddle}` : `1px solid #${colours.grayMiddle}`,
    },
  }),
};

export const SELECT_THEMES = {
  lite: liteTheme,
  liteAbsolute: liteAbsoluteTheme,
  partnerPortal: partnerPortalTheme,
  longAuction: longAuctionTheme,
  editProfileDateTheme,
};

export const THEMES = {
  lite: 'lite',
  liteAbsolute: 'liteAbsolute',
  partnerPortal: 'partnerPortal',
  longAuctionTheme: 'longAuctionTheme',
  editProfileDateTheme: 'editProfileDateTheme',
};
