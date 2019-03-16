import _ from "lodash"
import nodepath from "./NodePath"

const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

  @property(cc.Prefab)
  fishPref: cc.Prefab = null
  // @property(cc.Label)
  // label: cc.Label = null;

  @property(cc.NodePool)
  fishPool: cc.NodePool = null

  // @property
  // text: string = 'hello';

  onLoad() {

    // 创建一个缓存池
    this.fishPool = new cc.NodePool()

    // 创建鱼
    this.createFish(3)

  }

  /**
   * 根据鱼的数量创建鱼的节点
   * @param num 鱼的数量
   */
  public createFish(num: number): void {
    for (let index = 0; index < num; index++) {
      let fish = this.getFishNode()
      let fishgroup = cc.find(nodepath.fishGroupPath)
      fish.active = true
      let pos = this.getRandomPosition()
      // console.log(pos)
      fish.x = pos.x
      fish.y = pos.y
      // fish.parent = fishgroup
      fishgroup.addChild(fish)
    }
  }

  /**
   * 获取一个随机坐标
   */
  public getRandomPosition(): cc.Vec2 {
    let widowWidth = cc.winSize.width
    let windownHeight = cc.winSize.height
    let x = null
    let y = null
    // 一半概率
    if (100 * Math.random() > 50) {
      x = widowWidth / 2 * Math.random()
    } else {
      x = -widowWidth / 2 * Math.random()
    }
    if (100 * Math.random() > 50) {
      y = windownHeight / 2 * Math.random()
    } else {
      y = -windownHeight / 2 * Math.random()
    }
    return new cc.Vec2(x, y)
  }


  // 获取缓存节点
  public getFishNode(): cc.Node {
    let node = this.fishPool.get()
    if (!node) {
      this.fishPool.put(cc.instantiate(this.fishPref))
    }
    return this.fishPool.get()
  }

  

  // start() {
  //   // init logic
  //   // this.label.string = this.text;
  // }
}
