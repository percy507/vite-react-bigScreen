export function requestServerTime() {
  return Promise.resolve({ data: Date.now() });
}

export function requestLeftTopTreeData() {
  return Promise.resolve({
    data: [
      {
        id: '1547811063846801408',
        parentId: '3302',
        level: 1,
        label: '海曙区',
        value: '330203',
        children: [
          {
            id: '1547816379565084672',
            parentId: '330203',
            level: 2,
            label: '南门街道',
            value: '330203001000',
            children: [
              {
                id: '1580381659205865472',
                parentId: '330203001000',
                level: 3,
                label: '20221013项目名称',
                value: 'XM10130001',
                children: null,
              },
              {
                id: '1580389214174973952',
                parentId: '330203001000',
                level: 3,
                label: '项目22222',
                value: 'XM202210130003',
                children: null,
              },
              {
                id: '1580441334295171072',
                parentId: '330203001000',
                level: 3,
                label: '项目33333',
                value: 'XM202210130004',
                children: null,
              },
            ],
          },
          {
            id: '1547816379627999232',
            parentId: '330203',
            level: 2,
            label: '江厦街道',
            value: '330203002000',
            children: [
              {
                id: '1602925597779169280',
                parentId: '330203002000',
                level: 3,
                label: '项目2-1',
                value: 'XM202212140006',
                children: null,
              },
              {
                id: '1580441334295171072',
                parentId: '330203001000',
                level: 3,
                label: '项目2-2',
                value: 'XM202210130004',
                children: null,
              },
            ],
          },
          {
            id: '1547816379627999233',
            parentId: '330203',
            level: 2,
            label: '西门街道',
            value: '330203003000',
            children: [],
          },
        ],
      },
    ],
  });
}

function randomList() {
  return new Array(~~(Math.random() * 10 + 3)).fill(0).map((_, index) => {
    return {
      year: 2000 + index,
      v1: ~~(Math.random() * 1000 + 10),
      v2: ~~(Math.random() * 1000 + 10),
      v3: ~~(Math.random() * 50000 + 100),
    };
  });
}

export function requestLeftBlock1(params) {
  console.log(params);
  return Promise.resolve({ data: randomList() });
}

export function requestLeftBlock2(params) {
  console.log(params);
  return Promise.resolve({ data: randomList() });
}

export function requestLeftBlock3(params) {
  console.log(params);
  return Promise.resolve({ data: randomList() });
}

export function requestCenterBlock1(params) {
  console.log(params);
  return Promise.resolve({
    data: new Array(~~(Math.random() * 10 + 3)).fill(0).map((_, index) => {
      return {
        year: 2000 + index,
        id: index,
        projectName: `项目${~~(Math.random() * 1000 + 10)}`,
        longitude: 1 - Math.random() * 2 + 119.87,
        latitude: 1 - Math.random() * 2 + 29.38,
      };
    }),
  });
}
