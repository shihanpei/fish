// import _ from "lodash"
// import nodepath from "./NodePath"

// const { ccclass, property } = cc._decorator;

// @ccclass
// export default class Helloworld extends cc.Component {

//   @property(cc.Prefab)
//   fishPref: cc.Prefab = null
//   // @property(cc.Label)
//   // label: cc.Label = null;

//   @property(cc.NodePool)
//   fishPool: cc.NodePool = null

//   // @property
//   // text: string = 'hello';

//   onLoad() {

//     // 创建一个缓存池
//     this.fishPool = new cc.NodePool()

//     // 创建鱼
//     this.createFish(3)

//   }

//   /**
//    * 根据鱼的数量创建鱼的节点
//    * @param num 鱼的数量
//    */
//   public createFish(num: number): void {
//     for (let index = 0; index < num; index++) {
//       let fish = this.getFishNode()
//       let fishgroup = cc.find(nodepath.fishGroupPath)
//       fish.active = true
//       fish.parent = fishgroup
//     }
//   }


//   // 获取缓存节点
//   public getFishNode(): cc.Node {
//     let node = this.fishPool.get()
//     if (!node) {
//       this.fishPool.put(cc.instantiate(this.fishPref))
//     }
//     return this.fishPool.get()
//   }

//   // start() {
//   //   // init logic
//   //   // this.label.string = this.text;
//   // }
// }
