// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import tool from './tool'

const { ccclass, property } = cc._decorator;

@ccclass
export default class Move extends cc.Component {

  // @property(cc.Label)
  // label: cc.Label = null;

  // @property 
  // text: string = 'hello';

  // LIFE-CYCLE CALLBACKS:

  //定义一个方法，返回一个动作
  public getMove(): cc.Action {
    //获取鱼的随机x,y为位移的距离以及随机时间
    let time = tool.getRandomNum(1, 2)
    let xLen = tool.getRandomNum(20, 50, true)
    let yLen = tool.getRandomNum(30, 40, true)
    //定义一个动作cc.moneBy
    let actionTo = cc.moveBy(time, xLen, yLen)
    //定义一个动作去执行一个回调函数
    let callback = cc.callFunc(() => {
      this.startMove()
    })
    //定义一个容器的动作，顺序执行actionTo 和 callback
    let sequence = cc.sequence(
      actionTo,
      callback
    )
    return sequence
  }

  //让这个节点运行gteMove()方法中返回的动作
  public startMove(){
    this.node.runAction(this.getMove())
  }

  onLoad() {
    this.startMove()
  }

  // start() {

  // }

  // update (dt) {}
}
