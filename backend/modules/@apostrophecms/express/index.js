export default {
  options: {
    session: {
      // If this still says `undefined`, set a real secret!
      secret: undefined
    },
    externalFrontKey: process.env.APOS_EXTERNAL_FRONT_KEY
  }
};
