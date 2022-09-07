import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import {
  FONTS,
  FONT_SIZE_PROPERTIES,
  MEDIA_QUERIES,
  SPACE_PROPERTIES,
} from '../theme/tokens';

const responsiveProperties = defineProperties({
  conditions: MEDIA_QUERIES,
  defaultCondition: 'mobile',
  properties: {
    fontSize: FONT_SIZE_PROPERTIES,
    fontFamily: FONTS,
    lineHeight: FONT_SIZE_PROPERTIES,
  },
  shorthands: {},
});

export const fontSizeUtilityStyles = createSprinkles(responsiveProperties);

// It's a good idea to export the Sprinkles type too
export type FontSizeUtilityStyles = Parameters<typeof fontSizeUtilityStyles>[0];
