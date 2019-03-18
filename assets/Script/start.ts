import _ from "lodash"
import config from "./Config"
import tool from "./tool";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

  // 鱼的预制体
  @property(cc.Prefab)
  fishPref: cc.Prefab = null
  // 鱼的缓存池
  @property(cc.NodePool)
  fishPool: cc.NodePool = null
  //定时器时间间隔
  @property
  fishtime: number = 5
  inittime: number = 0

  onLoad() {

    // 创建一个缓存池
    this.fishPool = new cc.NodePool()
  }

  /**
   * 根据鱼的数量创建鱼的节点
   * @param name 鱼的名称
   * @param num 鱼的数量
   */
  public createFish(name: string, num: number): void {
    for (let index = 0; index < num; index++) {
      //获取克隆对象的节点
      let fish = this.getFishNode()
      let fishgroup = cc.find(config.fishGroupPath)
      fish.getComponent(cc.Animation).play(name)
      //添加move组建
      fish.addComponent("move")
      //激活节点
      fish.active = true
      //获取随机坐标
      let pos = this.getRandomPosition()
      // console.log(pos)
      //让克隆节点里鱼的的坐标对应随机坐标
      fish.x = pos.x
      fish.y = pos.y
      // fish.parent = fishgroup
      //往鱼容器里添加鱼节点
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



  /**
   * 从指定缓存池和预制体获取 节点克隆
   */
  public getFishNode(): cc.Node {
    let node = this.fishPool.get()
    if (!node) {
      this.fishPool.put(cc.instantiate(this.fishPref))
    }
    return this.fishPool.get()
  }

  update(dt: number) {
    if (this.inittime <= 0) {
      // 创建鱼
      config.fishlist.forEach(fish => {
        this.createFish(fish.name, Math.round(tool.getRandomNum(1, 5)))
      });
      this.inittime = this.fishtime
    }
    this.inittime = this.inittime - dt
  }

  // start() {
  //   // init logic
  //   // this.label.string = this.text;
  // }
}
