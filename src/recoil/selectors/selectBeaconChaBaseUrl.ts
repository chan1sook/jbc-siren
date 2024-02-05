import { selector } from 'recoil'
import { JibDoraValidatorUrl } from '../../constants/constants'

export const selectBeaconChaBaseUrl = selector({
  key: 'selectBeaconChaBaseUrl',
  get: () => {
    return JibDoraValidatorUrl
  },
})
