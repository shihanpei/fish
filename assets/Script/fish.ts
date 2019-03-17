
const { ccclass, property } = cc._decorator;

@ccclass
export default class FishClass extends cc.Component {

  /**
   * 鱼的图片
   */
  @property(cc.SpriteFrame)
  fishRed: cc.SpriteFrame = null

  // 乌龟的图片
  @property(cc.SpriteFrame)
  fishTort: cc.SpriteFrame = null

  // 鲨鱼图片
  @property(cc.SpriteFrame)
  fishShark: cc.SpriteFrame = null

  /**
   * 得到指定鱼的图片资源
   * @param name 鱼的名字
   */
  getFishImage(name: string): cc.SpriteFrame {
    return this[name]
  }


  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  // start() {

  // }

  // update (dt) {}
}
