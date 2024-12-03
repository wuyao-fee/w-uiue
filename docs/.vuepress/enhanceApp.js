import WUI from '../../dist/w-uiue.umd.min'
import "../../dist/w-uiue.css"

export default async ({ Vue }) => {
    if (typeof process === 'undefined') {
        Vue.use(WUI)
    }
}