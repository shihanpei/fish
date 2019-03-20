class Tool {
	/**
	 * 返回一个随机值
	 * @param min // 最小值
	 * @param max // 最大值
	 * @param need //是否需要改变方向
	 */
	public getRandomNum(min: number, max: number, need: boolean = false): number {
		//定义一个随机值
		let result = min + max * Math.random()
		//判断需要改变方向
		if (need) {
			//判断有百分之50的几率，返回一个负的随机值
			let n = Math.random()
			if (n > 0.5) {
				return -result
			}
		}
		//返回一个正的随机值
		return result
	}

	public getPostion(startPos: cc.Vec2, endPos: cc.Vec2): number {
		// let hudu = Math.atan2(startPos.y - endPos.y, startPos.x - endPos.x)
		let hudu = Math.atan2(endPos.y - startPos.y, endPos.x - startPos.x)
		// 转角度
		let rotation = 180 * hudu / Math.PI
		rotation = 90 - rotation

		// 超出边界
		if (endPos.y <= startPos.y) {
			return
		}
		if (rotation < -90 || rotation > 90) {
			return
		}

		return rotation
	}
}
const tool = new Tool

export default tool