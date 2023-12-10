
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Area from '@evershop/evershop/src/components/common/Area';
      import Hydrate from '@evershop/evershop/src/components/common/react/client/HydrateAdmin';
      
Area.defaultProps.components = {
  header: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvYXV0aC9wYWdlcy9hZG1pbi9hbGwvQWRtaW5Vc2VyLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvYXV0aC9wYWdlcy9hZG1pbi9hbGwvQWRtaW5Vc2VyLmpzeA==',
      sortOrder: 50,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/auth/pages/admin/all/AdminUser.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9Mb2dvLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9Mb2dvLmpzeA==',
      sortOrder: 10,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/cms/pages/admin/all/Logo.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9TZWFyY2hCb3guanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9TZWFyY2hCb3guanN4',
      sortOrder: 20,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/cms/pages/admin/all/SearchBox.jsx')
    }
  },
  adminMenu: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hbGwvQ2F0YWxvZ01lbnVHcm91cC5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hbGwvQ2F0YWxvZ01lbnVHcm91cC5qc3g=',
      sortOrder: 20,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/all/CatalogMenuGroup.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9DbXNNZW51R3JvdXAuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9DbXNNZW51R3JvdXAuanN4',
      sortOrder: 60,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/cms/pages/admin/all/CmsMenuGroup.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9RdWlja0xpbmtzLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9RdWlja0xpbmtzLmpzeA==',
      sortOrder: 10,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/cms/pages/admin/all/QuickLinks.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY3VzdG9tZXIvcGFnZXMvYWRtaW4vYWxsL0N1c3RvbWVyTWVudUdyb3VwLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY3VzdG9tZXIvcGFnZXMvYWRtaW4vYWxsL0N1c3RvbWVyTWVudUdyb3VwLmpzeA==',
      sortOrder: 40,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/customer/pages/admin/all/CustomerMenuGroup.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvb21zL3BhZ2VzL2FkbWluL2FsbC9PbXNNZW51R3JvdXAuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvb21zL3BhZ2VzL2FkbWluL2FsbC9PbXNNZW51R3JvdXAuanN4',
      sortOrder: 30,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/oms/pages/admin/all/OmsMenuGroup.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvcHJvbW90aW9uL3BhZ2VzL2FkbWluL2FsbC9Db3Vwb25NZW51R3JvdXAuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvcHJvbW90aW9uL3BhZ2VzL2FkbWluL2FsbC9Db3Vwb25NZW51R3JvdXAuanN4',
      sortOrder: 50,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/promotion/pages/admin/all/CouponMenuGroup.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvc2V0dGluZy9wYWdlcy9hZG1pbi9hbGwvU2V0dGluZ01lbnVHcm91cC5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvc2V0dGluZy9wYWdlcy9hZG1pbi9hbGwvU2V0dGluZ01lbnVHcm91cC5qc3g=',
      sortOrder: 500,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/setting/pages/admin/all/SettingMenuGroup.jsx')
    }
  },
  quickLinks: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hbGwvTmV3UHJvZHVjdFF1aWNrTGluay5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hbGwvTmV3UHJvZHVjdFF1aWNrTGluay5qc3g=',
      sortOrder: 20,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/all/NewProductQuickLink.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvcHJvbW90aW9uL3BhZ2VzL2FkbWluL2FsbC9OZXdDb3Vwb25RdWlja0xpbmsuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvcHJvbW90aW9uL3BhZ2VzL2FkbWluL2FsbC9OZXdDb3Vwb25RdWlja0xpbmsuanN4',
      sortOrder: 30,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/promotion/pages/admin/all/NewCouponQuickLink.jsx')
    }
  },
  rightSide: {
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0RWRpdCtwcm9kdWN0TmV3L0F0dHJpYnV0ZXMuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0RWRpdCtwcm9kdWN0TmV3L0F0dHJpYnV0ZXMuanN4',
      sortOrder: 30,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/productEdit+productNew/Attributes.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0RWRpdCtwcm9kdWN0TmV3L0ludmVudG9yeS5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0RWRpdCtwcm9kdWN0TmV3L0ludmVudG9yeS5qc3g=',
      sortOrder: 15,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/productEdit+productNew/Inventory.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0RWRpdCtwcm9kdWN0TmV3L1N0YXR1cy5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0RWRpdCtwcm9kdWN0TmV3L1N0YXR1cy5qc3g=',
      sortOrder: 10,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/productEdit+productNew/Status.jsx')
    }
  },
  productForm: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0RWRpdCtwcm9kdWN0TmV3L0Zvcm1Db250ZW50LmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0RWRpdCtwcm9kdWN0TmV3L0Zvcm1Db250ZW50LmpzeA==',
      sortOrder: 10,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/productEdit+productNew/FormContent.jsx')
    }
  },
  leftSide: {
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0RWRpdCtwcm9kdWN0TmV3L0dlbmVyYWwuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0RWRpdCtwcm9kdWN0TmV3L0dlbmVyYWwuanN4',
      sortOrder: 10,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/productEdit+productNew/General.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0RWRpdCtwcm9kdWN0TmV3L01lZGlhLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0RWRpdCtwcm9kdWN0TmV3L01lZGlhLmpzeA==',
      sortOrder: 15,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/productEdit+productNew/Media.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0RWRpdCtwcm9kdWN0TmV3L1Nlby5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0RWRpdCtwcm9kdWN0TmV3L1Nlby5qc3g=',
      sortOrder: 60,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/productEdit+productNew/Seo.jsx')
    }
  },
  content: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0RWRpdCtwcm9kdWN0TmV3L1BhZ2VIZWFkaW5nLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0RWRpdCtwcm9kdWN0TmV3L1BhZ2VIZWFkaW5nLmpzeA==',
      sortOrder: 5,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/productEdit+productNew/PageHeading.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0TmV3L1Byb2R1Y3ROZXdGb3JtLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9wcm9kdWN0TmV3L1Byb2R1Y3ROZXdGb3JtLmpzeA==',
      sortOrder: 10,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/productNew/ProductNewForm.jsx')
    }
  },
  body: {
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9MYXlvdXQuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9MYXlvdXQuanN4',
      sortOrder: 10,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/cms/pages/admin/all/Layout.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9Ob3RpZmljYXRpb24uanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9Ob3RpZmljYXRpb24uanN4',
      sortOrder: 10,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/cms/pages/admin/all/Notification.jsx')
    }
  },
  head: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9NZXRhLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9NZXRhLmpzeA==',
      sortOrder: 5,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/cms/pages/admin/all/Meta.jsx')
    }
  },
  adminNavigation: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9OYXZpZ2F0aW9uLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9OYXZpZ2F0aW9uLmpzeA==',
      sortOrder: 10,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/cms/pages/admin/all/Navigation.jsx')
    }
  },
  settingPageMenu: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvb21zL3BhZ2VzL2FkbWluL2FsbC9TaGlwcGluZ1NldHRpbmdNZW51LmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvb21zL3BhZ2VzL2FkbWluL2FsbC9TaGlwcGluZ1NldHRpbmdNZW51LmpzeA==',
      sortOrder: 15,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/oms/pages/admin/all/ShippingSettingMenu.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvc2V0dGluZy9wYWdlcy9hZG1pbi9hbGwvUGF5bWVudFNldHRpbmdNZW51LmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvc2V0dGluZy9wYWdlcy9hZG1pbi9hbGwvUGF5bWVudFNldHRpbmdNZW51LmpzeA==',
      sortOrder: 10,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/setting/pages/admin/all/PaymentSettingMenu.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvc2V0dGluZy9wYWdlcy9hZG1pbi9hbGwvU3RvcmVTZXR0aW5nTWVudS5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvc2V0dGluZy9wYWdlcy9hZG1pbi9hbGwvU3RvcmVTZXR0aW5nTWVudS5qc3g=',
      sortOrder: 5,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/setting/pages/admin/all/StoreSettingMenu.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvdGF4L3BhZ2VzL2FkbWluL2FsbC9UYXhTZXR0aW5nTWVudS5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvdGF4L3BhZ2VzL2FkbWluL2FsbC9UYXhTZXR0aW5nTWVudS5qc3g=',
      sortOrder: 20,
      component: require('/var/nodejs/eventshop/node_modules/@evershop/evershop/src/modules/tax/pages/admin/all/TaxSettingMenu.jsx')
    }
  }
} 
ReactDOM.hydrate(
        <Hydrate/>,
        document.getElementById('app')
      );