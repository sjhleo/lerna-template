import { Component, Vue } from "vue-property-decorator";
import "./index.scss";
@Component({ template: require("./index.html"), components: {} })
export default class MyComponent extends Vue {
    public msg: string = "";
}
