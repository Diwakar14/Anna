export function parseJSON(dataObject: any, container: any[]) {
  let keys = Object.keys(dataObject);

  if (keys?.length > 0) {
    keys.forEach((key) => {
      if (typeof dataObject[key] == 'object') {
        if (dataObject[key]?.length == undefined) {
          let newCont = { key: key, type: 'object', values: [] };
          if (dataObject[key]) {
            parseJSON(dataObject[key], newCont.values);
          }
          container.push(newCont);
        } else {
          let completeArray: any = [];
          dataObject[key].forEach((item: any) => {
            if (typeof item === 'object') {
              let cont = parseJSON(item, []);
              completeArray.push(cont);
            }
          });
          container.push({
            key: key,
            type: 'array',
            value: 'Array(' + completeArray.length + ')',
            values: completeArray,
          });
        }
      } else if (typeof dataObject[key] == 'number') {
        container.push({ key: key, type: 'number', value: dataObject[key] });
      } else if (typeof dataObject[key] == 'string') {
        const stringType = detectStringType(dataObject[key]);
        let type = stringType ?? 'string';
        container.push({ key: key, type: type, value: dataObject[key] });
      } else {
        container.push({ key: key, type: 'boolean', value: dataObject[key] });
      }
    });
  }

  return container;
}

function parseXMLNode(xmlDoc: any, container: any[]) {
  for (let i = 0; i < xmlDoc.children.length; i++) {
    const element = xmlDoc.children.item([i]);
    if (element.children.length > 0) {
      const child = parseXMLNode(element, []);
      container.push({ key: element.tagName, type: 'parent', values: child });
    } else {
      let attributes = [];
      for (let j = 0; j < element.attributes.length; j++) {
        const attr = element.attributes.item(j);
        attributes.push({ key: attr.nodeName, value: attr.value });
      }
      container.push({
        key: element.tagName,
        type: 'leaf',
        value: element.textContent,
        attributes: attributes,
      });
    }
  }

  return container;
}

export function parseXML(xmlData: string) {
  let xmlParser = new DOMParser();
  var xmlDoc = xmlParser.parseFromString(xmlData, 'text/xml'); //string to XML
  return parseXMLNode(xmlDoc, []);
}

export function detectStringType(xmlData: string) {
  let newXmlData = xmlData.replace('\n', '');
  if (newXmlData[0] === '<' && newXmlData[newXmlData.length - 1] === '>') {
    return 'xmlString';
  }

  let lastIndex = newXmlData.length - 1;
  if (
    (newXmlData[0] === '{' || newXmlData[0] === '[') &&
    (newXmlData[lastIndex] === ']' || newXmlData[lastIndex] === ']')
  ) {
    return 'jsonString';
  }
  return null;
}
