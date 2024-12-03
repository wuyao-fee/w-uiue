import WUI from '../../dist/w-ui.umd.min'
import "../../dist/w-ui.css"

export default async ({ Vue }) => {
    if (typeof process === 'undefined') {
        Vue.use(WUI)
    }
}