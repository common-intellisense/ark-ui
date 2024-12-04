import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function arkVue4() {
  return {
    uiName: '@ark-ui/vue4',
    lib: '@ark-ui/vue',
    map: getPropsMap(),
  }
}

export function arkVue4Components() {
  return {
    map: getComponentsMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    isReact: true,
    lib: '@ark-ui/vue',
    dynamicLib: '@ark-ui/vue/${name}',
    // directives: directives.arkVue4,
  }
}
