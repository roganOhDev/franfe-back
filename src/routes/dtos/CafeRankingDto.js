export class CafeRankingDto {
  static Response = class {
    constructor(UserComparisonRank, UserCompareWinRank) {
      this.userComparisonRank = UserComparisonRank;
      this.userCompareWinRank = UserCompareWinRank;
    }
  }

  static UserComparisonRank = class {
    constructor(list) {
      this.list = list;
    }
  }

  static UserComparisonElement = class {
    constructor(rank, cafeUuid) {
      this.rank = rank;
      this.cafeUuid = cafeUuid;
    }
  }

  static UserCompareWinRank = class {
    constructor(list) {
      this.list = list;
    }
  }

  static UserCompareWinElement = class {
    constructor(rank, cafeUuid) {
      this.rank = rank;
      this.cafeUuid = cafeUuid;
    }
  }
}