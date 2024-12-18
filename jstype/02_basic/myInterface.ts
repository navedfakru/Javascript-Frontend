interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
  // startTrail: () => string,
  startTrail(): string
  getCoupon(couponname: string, value: number): number
}

interface User {
  githubToken: string
}

interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const hitesh: Admin = {
  dbId: 22, 
  role: "admin",
  email: "h@h.com", 
  userId: 2211, 
  githubToken: 'github',
  startTrail: () => {
  return "trail started" },
  getCoupon: (couponname: "hites10", off: 10) => {
    return off
  }
}

hitesh.email = "h@hc.com"
// hitesh.dbId = 33