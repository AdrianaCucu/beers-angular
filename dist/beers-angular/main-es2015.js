(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-nav-bar></app-nav-bar>\n  <router-outlet></router-outlet>\n</div>\n\n<footer>\n  <p>\n    Made with\n    <span id=\"heart\"> ❤ </span>\n    by A.C. ⠀· ⠀\n    <a href=\"https://github.com/AdrianaCucu\" target=\"_blank\">\n      GitHub\n    </a>\n  </p>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/beer-details/beer-details.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/beer-details/beer-details.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Loader animation -->\n<div *ngIf=\"!items && !idError\">\n  <div class=\"ui active dimmer\">\n    <div class=\"ui massive loader\"></div>\n  </div>\n</div>\n\n<div class=\"ui segment base-colours under-header\">\n  <!-- Error message -->\n  <div *ngIf=\"idError\">\n    <h3>\n      Invalid route.\n    </h3>\n  </div>\n\n  <!-- There is only one bere, but it only works like this. -->\n  <div\n    *ngFor=\"let beer of items; index as beerId\"\n    class=\"ui container segment full-container\"\n  >\n    <h2 class=\"ui header\">\n      <div class=\"ui container title yellow-text\">\n        <p>{{ beer.name }}</p>\n      </div>\n    </h2>\n\n    <img class=\"ui left floated image\" src=\"{{ beer.image_url }}\" />\n\n    <div class=\"right-side\">\n      <div class=\"description black-text medium-text\">\n        <p>{{ beer.description }}</p>\n      </div>\n\n      <br />\n\n      <div clss=\"first-brewed\">\n        <div class=\"meta black-text small-text\">\n          <p><i>First brewed:</i> {{ beer.first_brewed }}</p>\n        </div>\n      </div>\n\n      <br />\n\n      <div class=\"food-pairing\">\n        <div class=\"description black-text small-text\">\n          <p><i>Food pairing:</i> {{ beer.food_pairing }}</p>\n        </div>\n      </div>\n\n      <br />\n\n      <div class=\"brewers-tips\">\n        <div class=\"description black-text small-text\">\n          <p><i>Brewer's tips:</i> {{ beer.brewers_tips }}</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"bottom-right\">\n      <div class=\"extra content\">\n        <button\n          class=\"ui left floated icon button turn-yellow\"\n          (click)=\"updateFavourites(beer)\"\n        >\n          <div *ngIf=\"!isInFavourites(beer)\">\n            <i class=\"star large icon turn-yellow\"></i>\n          </div>\n\n          <div *ngIf=\"isInFavourites(beer)\">\n            <i class=\"star large icon yellow-text\"></i>\n          </div>\n        </button>\n\n        <button\n          class=\"ui right floated icon button turn-yellow\"\n          (click)=\"updateCart(beer)\"\n        >\n          <div *ngIf=\"!isInCart(beer)\">\n            <i class=\"shopping cart large icon turn-yellow\"></i>\n          </div>\n\n          <div *ngIf=\"isInCart(beer)\">\n            <i class=\"shopping cart large icon yellow-text\"></i>\n          </div>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"deviceWidth > 1100\" class=\"ui container\">\n  <div class=\"similar\">\n    <div class=\"header-similar base-colours\">\n      Similar Items:\n    </div>\n\n    <div *ngFor=\"let item of similarItems\" class=\"ui column\">\n      <div class=\"ui card\">\n        <div class=\"content\">\n          <div class=\"image-container\">\n            <div class=\"ui mini image\" style=\"background: transparent;\">\n              <img src=\"{{ item.image_url }}\" />\n            </div>\n          </div>\n\n          <div class=\"header\">\n            <a\n              class=\"turn-yellow\"\n              [title]=\"item.name + ' details'\"\n              [routerLink]=\"['/beers', item.id]\"\n              (click)=\"updatePage()\"\n            >\n              {{ item.name }}\n            </a>\n          </div>\n        </div>\n\n        <div class=\"bottom-right\">\n          <div class=\"extra content\">\n            <button\n              class=\"ui left floated icon button\"\n              (click)=\"updateFavourites(item)\"\n            >\n              <div *ngIf=\"!isInFavourites(item)\">\n                <i class=\"star large icon turn-yellow\"></i>\n              </div>\n\n              <div *ngIf=\"isInFavourites(item)\">\n                <i class=\"star large icon yellow-text\"></i>\n              </div>\n            </button>\n\n            <button\n              class=\"ui right floated icon button turn-yellow\"\n              (click)=\"updateCart(item)\"\n            >\n              <div *ngIf=\"!isInCart(item)\">\n                <i class=\"shopping cart large icon turn-yellow\"></i>\n              </div>\n\n              <div *ngIf=\"isInCart(item)\">\n                <i class=\"shopping cart large icon yellow-text\"></i>\n              </div>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/beer-list/beer-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/beer-list/beer-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar (clickEvent)=\"updateFilter()\"></app-nav-bar>\n\n<!-- Loader animation -->\n<div *ngIf=\"!beers.length && showLoader\">\n  <div class=\"ui active dimmer\">\n    <div class=\"ui massive loader\"></div>\n  </div>\n</div>\n\n<div\n  class=\"ui container base-colours under-header viewport\"\n  appScrollable\n  (scrollPosition)=\"scrollHandler($event)\"\n>\n  <div class=\"beers-list\">\n    <div *ngFor=\"let beer of beers\" class=\"ui column\">\n      <div class=\"ui card card-box\">\n        <div class=\"content\">\n          <div class=\"ui\" style=\"background: transparent;\">\n            <img src=\"{{ beer.image_url }}\" />\n          </div>\n\n          <div class=\"bottom-text\">\n            <div class=\"header\">\n              <a\n                class=\"turn-yellow title\"\n                [title]=\"beer.name + ' details'\"\n                [routerLink]=\"['/beers', beer.id]\"\n              >\n                {{ beer.name }}\n              </a>\n            </div>\n            <div class=\"meta\">{{ beer.tagline }}</div>\n          </div>\n        </div>\n\n        <div class=\"bottom-right\">\n          <div class=\"extra content\">\n            <button\n              class=\"ui left floated icon button\"\n              (click)=\"updateFavourites(beer)\"\n            >\n              <div *ngIf=\"!isInFavourites(beer)\">\n                <i class=\"star large icon turn-yellow\"></i>\n              </div>\n\n              <div *ngIf=\"isInFavourites(beer)\">\n                <i class=\"star large icon yellow-text\"></i>\n              </div>\n            </button>\n\n            <button\n              class=\"ui right floated icon button turn-yellow\"\n              (click)=\"updateCart(beer)\"\n            >\n              <div *ngIf=\"!isInCart(beer)\">\n                <i class=\"shopping cart large icon turn-yellow\"></i>\n              </div>\n\n              <div *ngIf=\"isInCart(beer)\">\n                <i class=\"shopping cart large icon yellow-text\"></i>\n              </div>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cart/cart.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cart/cart.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"link === 'cart'\">\n  <div *ngIf=\"!items.length\" class=\"top-header\">\n    <div class=\"header\">\n      Your basket is empty\n    </div>\n  </div>\n\n  <div *ngIf=\"items.length\" class=\"top-header\">\n    <div class=\"header\">\n      Shopping Basket\n    </div>\n\n    <button\n      class=\"ui left floated button remove-button inverted-colours\"\n      (click)=\"clearCart()\"\n    >\n      Empty Basket\n    </button>\n  </div>\n\n  <div\n    *ngIf=\"items.length && deviceWidth > 450\"\n    class=\"ui segment under-header\"\n  >\n    <div class=\"ui two column very relaxed center aligned grid\">\n      <div class=\"column wide-column\">\n        <div class=\"ui middle aligned divided list viewport\">\n          <div class=\"item\" *ngFor=\"let item of items\">\n            <div class=\"right floated content\">\n              <div class=\"ui button turn-yellow\" (click)=\"removeBeer(item)\">\n                <i class=\"x icon\"></i>\n              </div>\n            </div>\n            <div class=\"left floated content image-container\">\n              <img src=\"{{ item.image_url }}\" />\n            </div>\n            <div class=\"left floated content content-container\">\n              <a\n                class=\"turn-yellow\"\n                [title]=\"item.name + ' details'\"\n                [routerLink]=\"['/beers', item.id]\"\n              >\n                {{ item.name }}\n              </a>\n\n              <div>\n                <input\n                  class=\"item-quantity\"\n                  type=\"number\"\n                  min=\"1\"\n                  max=\"20\"\n                  name=\"quantity\"\n                  [(ngModel)]=\"item.quantity\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"column narrow-column\">\n        <div class=\"ui button checkout-button\" [routerLink]=\"['/checkout']\">\n          <div class=\"title\">Checkout</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"ui vertical divider\">\n      ready?\n    </div>\n  </div>\n\n  <div\n    *ngIf=\"items.length && deviceWidth <= 450\"\n    class=\"ui segment under-header\"\n  >\n    <div class=\"ui action\">\n      <div class=\"ui button checkout-button\" [routerLink]=\"['/checkout']\">\n        <div class=\"title\">Checkout</div>\n      </div>\n    </div>\n\n    <div class=\"ui horizontal divider\">\n      ready?\n    </div>\n\n    <div class=\"ui middle aligned divided list viewport\">\n      <div class=\"item\" *ngFor=\"let item of items\">\n        <div class=\"right floated content\">\n          <div class=\"ui button turn-yellow\" (click)=\"removeBeer(item)\">\n            <i class=\"x icon\"></i>\n          </div>\n        </div>\n        <div class=\"left floated content image-container\">\n          <img src=\"{{ item.image_url }}\" />\n        </div>\n        <div class=\"left floated content content-container\">\n          <a\n            class=\"turn-yellow\"\n            [title]=\"item.name + ' details'\"\n            [routerLink]=\"['/beers', item.id]\"\n          >\n            {{ item.name }}\n          </a>\n\n          <div>\n            <input\n              class=\"item-quantity\"\n              type=\"number\"\n              min=\"1\"\n              max=\"20\"\n              name=\"quantity\"\n              [(ngModel)]=\"item.quantity\"\n            />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"link === 'checkout'\">\n  <div class=\"top-header\">\n    <div class=\"header\">\n      Order Information\n    </div>\n\n    <div *ngIf=\"items.length > 0\" class=\"ui segment under-header\">\n      <app-order-form></app-order-form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/favourites/favourites.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/favourites/favourites.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"top-header\">\n  <div *ngIf=\"!items.length\">\n    <h3>\n      You don't have any favourites.\n    </h3>\n  </div>\n\n  <button\n    class=\"ui left floated button inverted-colours reset-button\"\n    *ngIf=\"items.length\"\n    (click)=\"clearFavourites()\"\n  >\n    Reset favourites\n  </button>\n</div>\n\n<div class=\"ui base-colours viewport\">\n  <div class=\"ui cards\">\n    <div class=\"ui card\" *ngFor=\"let item of items\">\n      <div class=\"content\">\n        <img class=\"left floated mini ui image\" src=\"{{ item.image_url }}\" />\n        <a class=\"header\">\n          <a\n            class=\"turn-yellow\"\n            [title]=\"item.name + ' details'\"\n            [routerLink]=\"['/beers', item.id]\"\n          >\n            {{ item.name }}</a\n          >\n        </a>\n        <div class=\"meta\">\n          {{ item.description }}\n        </div>\n      </div>\n      <div class=\"extra content\">\n        <button\n          class=\"ui left floated button yellow-text bottom-button\"\n          style=\"background-color: transparent\"\n          (click)=\"removeBeer(item)\"\n        >\n          <i class=\"star large icon\"></i>\n        </button>\n\n        <button\n          class=\"ui right floated icon button turn-yellow\"\n          (click)=\"updateCart(item)\"\n        >\n          <div *ngIf=\"!isInCart(item)\">\n            <i class=\"shopping cart large icon turn-yellow\"></i>\n          </div>\n\n          <div *ngIf=\"isInCart(item)\">\n            <i class=\"shopping cart large icon yellow-text\"></i>\n          </div>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/landing-page.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/landing-page.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment base-colours under-header\">\n  <div class=\"ui container segment full-container\">\n    <div class=\"ui container\">\n      <h1 class=\"title yellow-text\">\n        Explore <br />\n        Brewdog's <br />\n        expansive <br />\n        beer <br />\n        catalogue\n      </h1>\n    </div>\n  </div>\n\n  <div class=\"ui container segment small-container base-colours\">\n    <div class=\"ui container\">\n      <h3 class=\"subtitle base-colours right-floated\">\n        Select a filter to start\n      </h3>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/nav-bar/nav-bar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/nav-bar/nav-bar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui menu top-bar top-background\">\n  <div class=\"item search-bar\">\n    <div class=\"ui fluid icon input\">\n      <input\n        (keyup.enter)=\"handleInput($event)\"\n        type=\"text\"\n        placeholder=\"Search...\"\n      />\n      <i class=\"search link icon\"></i>\n    </div>\n  </div>\n\n  <div class=\"right-button item\" [routerLink]=\"['/cart']\">\n    <div *ngIf=\"deviceWidth > 1100\">\n      <div class=\"ui right labeled icon button inverted-colours\">\n        Basket\n        <i class=\"shopping cart icon\"></i>\n      </div>\n    </div>\n\n    <div *ngIf=\"deviceWidth <= 1100\">\n      <div class=\"ui icon button inverted-colours\">\n        <i class=\"shopping cart icon\"></i>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"ui vertical pointing menu fixed-header background-gradient\">\n  <a [routerLink]=\"['/']\" class=\"ui button item title base-colours\">\n    Catalogue\n  </a>\n\n  <a\n    [routerLink]=\"['/favourites']\"\n    class=\"ui button item favourites base-colours\"\n  >\n    Favourites\n  </a>\n\n  <div class=\"sub-header\">\n    <!---->\n\n    <a\n      class=\"ui button item small-text base-colours\"\n      (click)=\"selectFilter('reset')\"\n      [routerLink]=\"['/beer-catalogue']\"\n    >\n      Reset filters\n    </a>\n\n    <div class=\"ui item\">\n      <div class=\"header base-colours small-text\">Alcohol By Volume</div>\n\n      <div class=\"menu\">\n        <div *ngFor=\"let item of abv\">\n          <div class=\"ui item\">\n            <div\n              class=\"ui checkbox\"\n              (click)=\"selectFilter(item)\"\n              [routerLink]=\"['/beer-catalogue']\"\n            >\n              <input type=\"checkbox\" [checked]=\"filterSelected(item)\" />\n              <label class=\"base-colours small-text\">\n                <div *ngIf=\"item === 'weak'\">0%-5%</div>\n                <div *ngIf=\"item === 'medium'\">5%-10%</div>\n                <div *ngIf=\"item === 'strong'\">>10%</div>\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ui item\">\n      <div class=\"header base-colours small-text\">\n        International Bitterness Units\n      </div>\n\n      <div class=\"menu\">\n        <div *ngFor=\"let item of ibu\">\n          <div class=\"ui item\">\n            <div\n              class=\"ui checkbox\"\n              (click)=\"selectFilter(item)\"\n              [routerLink]=\"['/beer-catalogue']\"\n            >\n              <input type=\"checkbox\" [checked]=\"filterSelected(item)\" />\n              <label class=\"base-colours small-text\">\n                <div *ngIf=\"item === 'low'\">0-15</div>\n                <div *ngIf=\"item === 'normal'\">15-80</div>\n                <div *ngIf=\"item === 'high'\">>80</div>\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ui item\">\n      <div\n        class=\"ui checkbox\"\n        (click)=\"selectFilter('random')\"\n        [routerLink]=\"['/beer-catalogue']\"\n      >\n        <input type=\"checkbox\" [checked]=\"filterSelected('random')\" />\n        <label class=\"base-colours small-text\">?</label>\n      </div>\n    </div>\n\n    <!---->\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/order-form/order-form.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/order-form/order-form.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"submitted\" class=\"full-container\">\n  <form class=\"ui form error\" (ngSubmit)=\"onSubmit()\" #orderForm=\"ngForm\">\n    <div class=\"ui two column very relaxed center aligned grid\">\n      <div class=\"column wide-column\">\n        <div class=\"form-container\">\n          <h4 class=\"ui dividing header yellow-text\">Shipping Information</h4>\n\n          <div class=\"field\">\n            <label>* Name</label>\n            <div class=\"two fields\">\n              <div class=\"field\">\n                <input\n                  type=\"text\"\n                  id=\"firstName\"\n                  required\n                  [(ngModel)]=\"model.firstName\"\n                  name=\"firstName\"\n                  #firstName=\"ngModel\"\n                />\n                <div\n                  class=\"alert-text\"\n                  [hidden]=\"firstName.valid || firstName.pristine\"\n                >\n                  Please enter a valid first name\n                </div>\n              </div>\n\n              <div class=\"field\">\n                <input\n                  type=\"text\"\n                  id=\"lastName\"\n                  required\n                  [(ngModel)]=\"model.lastName\"\n                  name=\"lastName\"\n                  #lastName=\"ngModel\"\n                />\n                <div\n                  class=\"alert-text\"\n                  [hidden]=\"lastName.valid || lastName.pristine\"\n                >\n                  Please enter a valid last name\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"field\">\n            <label>* Billing Address</label>\n            <div class=\"fields\">\n              <div class=\"twelve wide field\">\n                <input\n                  type=\"text\"\n                  id=\"address\"\n                  required\n                  [(ngModel)]=\"model.address\"\n                  name=\"address\"\n                  #address=\"ngModel\"\n                />\n                <div\n                  class=\"alert-text\"\n                  [hidden]=\"address.valid || address.pristine\"\n                >\n                  Please enter a valid address\n                </div>\n              </div>\n              <div class=\"four wide field\">\n                <input\n                  type=\"text\"\n                  id=\"apartment\"\n                  [(ngModel)]=\"model.apartment\"\n                  name=\"apartment\"\n                />\n              </div>\n            </div>\n          </div>\n\n          <div class=\"two fields\">\n            <div class=\"field\">\n              <label>* Country</label>\n\n              <select\n                class=\"ui fluid search dropdown\"\n                id=\"country\"\n                required\n                [(ngModel)]=\"model.country\"\n                name=\"country\"\n              >\n                <option *ngFor=\"let country of countries\" [value]=\"country\">\n                  {{ country }}\n                </option>\n              </select>\n            </div>\n          </div>\n\n          <h4 class=\"ui dividing header yellow-text\">Billing Information</h4>\n\n          <div class=\"field\">\n            <label>* Card Type</label>\n\n            <select\n              class=\"ui fluid search dropdown\"\n              id=\"cardType\"\n              required\n              [(ngModel)]=\"model.cardType\"\n              name=\"cardType\"\n            >\n              <option *ngFor=\"let type of cardTypes\" [value]=\"type\">\n                {{ type }}\n              </option>\n            </select>\n\n            <div class=\"fields\">\n              <div class=\"seven wide field\">\n                <label>* Card Number</label>\n\n                <input\n                  minlength=\"16\"\n                  maxlength=\"16\"\n                  type=\"text\"\n                  id=\"cardNumber\"\n                  required\n                  [(ngModel)]=\"model.cardNumber\"\n                  name=\"cardNumber\"\n                  #cardNumber=\"ngModel\"\n                />\n                <div\n                  class=\"alert-text\"\n                  [hidden]=\"cardNumber.valid || cardNumber.pristine\"\n                >\n                  Please enter a valid card number\n                </div>\n              </div>\n\n              <div class=\"three wide field\">\n                <label>* CVC</label>\n\n                <input\n                  minlength=\"3\"\n                  maxlength=\"3\"\n                  type=\"text\"\n                  id=\"cvc\"\n                  required\n                  [(ngModel)]=\"model.cvc\"\n                  name=\"cvc\"\n                  #cvc=\"ngModel\"\n                />\n                <div class=\"alert-text\" [hidden]=\"cvc.valid || cvc.pristine\">\n                  Please enter a valid CVC\n                </div>\n              </div>\n\n              <div class=\"six wide field\">\n                <label>* Expiration</label>\n                <div class=\"two fields\">\n                  <div class=\"field\">\n                    <select\n                      class=\"ui fluid search dropdown\"\n                      id=\"month\"\n                      required\n                      [(ngModel)]=\"model.expirationMonth\"\n                      name=\"month\"\n                    >\n                      <option *ngFor=\"let month of months\" [value]=\"month\">\n                        {{ month }}\n                      </option>\n                    </select>\n                  </div>\n\n                  <div class=\"field\">\n                    <input\n                      minlength=\"4\"\n                      maxlength=\"4\"\n                      type=\"text\"\n                      id=\"year\"\n                      required\n                      [(ngModel)]=\"model.expirationYear\"\n                      name=\"year\"\n                      #year=\"ngModel\"\n                    />\n                    <div\n                      class=\"alert-text\"\n                      [hidden]=\"year.valid || year.pristine\"\n                    >\n                      Please enter a valid year\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"centered column narrow-column\">\n        <button\n          [disabled]=\"orderForm.form.invalid\"\n          class=\"ui button checkout-button\"\n          type=\"submit\"\n        >\n          Submit\n        </button>\n      </div>\n    </div>\n\n    <div class=\"ui vertical divider\">\n      ready?\n    </div>\n  </form>\n</div>\n\n<div [hidden]=\"!submitted\">\n  <div class=\"ui two column very relaxed center aligned grid\">\n    <div class=\"left aligned column wide-column\">\n      <div class=\"form-container\">\n        <div class=\"viewport\">\n          <div class=\"row\">\n            <div *ngFor=\"let beer of model.items\">\n              <div class=\"column black-text\">\n                {{ beer.quantity }} x {{ beer.name }}\n              </div>\n            </div>\n          </div>\n\n          <div class=\"ui dividing header\"></div>\n\n          <div class=\"row\">\n            <div class=\"column sub-header\">Name</div>\n            <div class=\"column black-text\">\n              {{ model.firstName }} {{ model.lastName }}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"column sub-header\">Address</div>\n            <div class=\"column black-text\">\n              {{ model.address }} {{ model.apartment }}, {{ model.country }}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"column sub-header\">Billing Information</div>\n            <div class=\"column black-text\">Card type: {{ model.cardType }}</div>\n            <div class=\"column black-text\">\n              Card number: {{ model.cardNumber }}\n            </div>\n            <div class=\"column black-text\">CVC: {{ model.cvc }}</div>\n            <div class=\"column black-text\">\n              Expires: {{ model.expirationMonth }} {{ model.expirationYear }}\n            </div>\n          </div>\n\n          <button\n            class=\"ui button inverted-colours bottom-left\"\n            (click)=\"submitted = false\"\n          >\n            Edit Details\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"left aligned column narrow-column\">\n      <button\n        class=\"ui button checkout-button\"\n        type=\"submit\"\n        (click)=\"submitForm()\"\n      >\n        Submit\n\n        <br />\n        Order\n      </button>\n    </div>\n\n    <div class=\"ui vertical divider\">ready?</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:link,\r\na:visited,\r\na:hover,\r\na:active {\r\n  color: #f9d342;\r\n  text-decoration: none;\r\n}\r\n\r\n.auth-button {\r\n  position: relative;\r\n  float: right !important;\r\n  top: 3.5vh;\r\n  margin-right: 15vw;\r\n  display: inline-flex;\r\n  z-index: 3;\r\n}\r\n\r\nfooter {\r\n  background-color: #292826;\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 4vh;\r\n  z-index: 2;\r\n}\r\n\r\np {\r\n  position: fixed;\r\n  bottom: 1vh;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 1.5vh;\r\n}\r\n\r\n@media only screen and (min-width: 500px) and (max-width: 1100px) {\r\n  .auth-button {\r\n    left: 5vw;\r\n    margin-right: 5vw;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n  .auth-button {\r\n    top: 2.6vh;\r\n    margin-right: -20vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmxpbmssXHJcbmE6dmlzaXRlZCxcclxuYTpob3ZlcixcclxuYTphY3RpdmUge1xyXG4gIGNvbG9yOiAjZjlkMzQyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmF1dGgtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAzLjV2aDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1dnc7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgei1pbmRleDogMztcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyODI2O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0dmg7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxucCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMXZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuNXZoO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgLmF1dGgtYnV0dG9uIHtcclxuICAgIGxlZnQ6IDV2dztcclxuICAgIG1hcmdpbi1yaWdodDogNXZ3O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIC5hdXRoLWJ1dHRvbiB7XHJcbiAgICB0b3A6IDIuNnZoO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjB2dztcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'beers-angular';
    }
    ngOnInit() { }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_beers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/beers.service */ "./src/app/services/beers.service.ts");
/* harmony import */ var _services_favourites_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/favourites.service */ "./src/app/services/favourites.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_beer_list_beer_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/beer-list/beer-list.component */ "./src/app/components/beer-list/beer-list.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/favourites/favourites.component */ "./src/app/components/favourites/favourites.component.ts");
/* harmony import */ var _components_beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/beer-details/beer-details.component */ "./src/app/components/beer-details/beer-details.component.ts");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _directives_scrollable_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/scrollable.directive */ "./src/app/directives/scrollable.directive.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/order-form/order-form.component */ "./src/app/components/order-form/order-form.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _components_beer_list_beer_list_component__WEBPACK_IMPORTED_MODULE_11__["BeerListComponent"],
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__["NavBarComponent"],
            _components_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_13__["FavouritesComponent"],
            _components_beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_14__["BeerDetailsComponent"],
            _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_15__["LandingPageComponent"],
            _directives_scrollable_directive__WEBPACK_IMPORTED_MODULE_16__["ScrollableDirective"],
            _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_17__["CartComponent"],
            _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_18__["OrderFormComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: '', component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_15__["LandingPageComponent"] },
                { path: 'beers/:beerId', component: _components_beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_14__["BeerDetailsComponent"] },
                { path: 'beer-catalogue', component: _components_beer_list_beer_list_component__WEBPACK_IMPORTED_MODULE_11__["BeerListComponent"] },
                { path: 'favourites', component: _components_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_13__["FavouritesComponent"] },
                { path: ':cart-link', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_17__["CartComponent"] },
                { path: '**', redirectTo: '' }
            ])
        ],
        providers: [_services_beers_service__WEBPACK_IMPORTED_MODULE_7__["BeersService"], _services_favourites_service__WEBPACK_IMPORTED_MODULE_8__["FavouritesService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/beer-details/beer-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/beer-details/beer-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".base-colours {\n  background-color: #292826;\n  color: #f9d342;\n}\n\n.black-text {\n  color: #292826;\n}\n\n.bottom-right {\n  position: absolute;\n  right: 1vmax;\n  bottom: 0.5vmax;\n}\n\nbutton {\n  background-color: transparent !important;\n}\n\n.centered-text {\n  text-align: center;\n}\n\n.content {\n  display: inline-flex;\n}\n\n.favourite-button:hover {\n  background-color: transparent;\n}\n\n.favourite-button:focus {\n  background-color: transparent;\n}\n\n.full-container {\n  height: 80vh;\n}\n\n.header-similar {\n  position: fixed;\n  top: 13vh;\n  font-size: 3vh;\n  height: 3.5vh;\n  width: 20vw;\n  padding-top: 0.5vh;\n  z-index: 2;\n}\n\n.image-container {\n  height: 15vh;\n  padding-right: 1vw;\n}\n\nimg {\n  height: 60vmin;\n}\n\n.medium-text {\n  font-size: 2.5vmin;\n}\n\n.similar {\n  position: fixed;\n  top: 16.5vh;\n  left: 75vw;\n  width: 18vw;\n  height: 78vh;\n  overflow-y: scroll;\n}\n\n.small-text {\n  font-size: 2.2vmin;\n}\n\n.title {\n  font-size: 5vmin;\n}\n\n.turn-yellow {\n  color: #292826;\n}\n\n.turn-yellow:hover {\n  color: #f9d342;\n}\n\n.under-header {\n  position: relative;\n  top: 12vh;\n  left: 15vw;\n  height: 85vh;\n  width: 55vw;\n}\n\n.yellow-text {\n  color: #f9d342;\n}\n\n@media only screen and (min-width: 500px) and (max-width: 1100px) {\n  .under-header {\n    left: 22vw;\n    width: 75vw;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  img {\n    height: 50vmin;\n  }\n\n  .medium-text {\n    font-size: 3vmin;\n  }\n\n  .small-text {\n    font-size: 2.5vmin;\n  }\n\n  .under-header {\n    left: 26vw;\n    width: 100vw;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iZWVyLWRldGFpbHMvYmVlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULGNBQWM7RUFDZCxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iZWVyLWRldGFpbHMvYmVlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzZS1jb2xvdXJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjgyNjtcbiAgY29sb3I6ICNmOWQzNDI7XG59XG5cbi5ibGFjay10ZXh0IHtcbiAgY29sb3I6ICMyOTI4MjY7XG59XG5cbi5ib3R0b20tcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxdm1heDtcbiAgYm90dG9tOiAwLjV2bWF4O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyZWQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLmZhdm91cml0ZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZhdm91cml0ZS1idXR0b246Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZ1bGwtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA4MHZoO1xufVxuXG4uaGVhZGVyLXNpbWlsYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTN2aDtcbiAgZm9udC1zaXplOiAzdmg7XG4gIGhlaWdodDogMy41dmg7XG4gIHdpZHRoOiAyMHZ3O1xuICBwYWRkaW5nLXRvcDogMC41dmg7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDE1dmg7XG4gIHBhZGRpbmctcmlnaHQ6IDF2dztcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiA2MHZtaW47XG59XG5cbi5tZWRpdW0tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMi41dm1pbjtcbn1cblxuLnNpbWlsYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTYuNXZoO1xuICBsZWZ0OiA3NXZ3O1xuICB3aWR0aDogMTh2dztcbiAgaGVpZ2h0OiA3OHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5zbWFsbC10ZXh0IHtcbiAgZm9udC1zaXplOiAyLjJ2bWluO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDV2bWluO1xufVxuXG4udHVybi15ZWxsb3cge1xuICBjb2xvcjogIzI5MjgyNjtcbn1cblxuLnR1cm4teWVsbG93OmhvdmVyIHtcbiAgY29sb3I6ICNmOWQzNDI7XG59XG5cbi51bmRlci1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTJ2aDtcbiAgbGVmdDogMTV2dztcbiAgaGVpZ2h0OiA4NXZoO1xuICB3aWR0aDogNTV2dztcbn1cblxuLnllbGxvdy10ZXh0IHtcbiAgY29sb3I6ICNmOWQzNDI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLnVuZGVyLWhlYWRlciB7XG4gICAgbGVmdDogMjJ2dztcbiAgICB3aWR0aDogNzV2dztcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIGltZyB7XG4gICAgaGVpZ2h0OiA1MHZtaW47XG4gIH1cblxuICAubWVkaXVtLXRleHQge1xuICAgIGZvbnQtc2l6ZTogM3ZtaW47XG4gIH1cblxuICAuc21hbGwtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyLjV2bWluO1xuICB9XG5cbiAgLnVuZGVyLWhlYWRlciB7XG4gICAgbGVmdDogMjZ2dztcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/beer-details/beer-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/beer-details/beer-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: BeerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerDetailsComponent", function() { return BeerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_favourites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/favourites.service */ "./src/app/services/favourites.service.ts");
/* harmony import */ var src_app_services_beers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/beers.service */ "./src/app/services/beers.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");






let BeerDetailsComponent = class BeerDetailsComponent {
    constructor(favouritesService, beersService, cartService, router) {
        this.favouritesService = favouritesService;
        this.beersService = beersService;
        this.cartService = cartService;
        this.router = router;
        router.events.subscribe(val => {
            val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]
                ? ((this.id = val.url.replace(/\D/g, '')), this.ngOnInit())
                : null;
            // console.log(this.id);
            // console.log(val instanceof NavigationEnd);
        });
    }
    ngOnInit() {
        this.deviceWidth = window.innerWidth;
        this.idError = false;
        this.updatePage();
    }
    /**
     * Checks that the id is a positive integer between 1 and 325.
     *
     * @param id - the beer id contained in the route
     */
    validateId(id) {
        return /^\d+$/.test(id) && parseInt(id, 10) > 0 && parseInt(id, 10) < 326;
    }
    updatePage() {
        if (this.validateId(this.id)) {
            this.beersService.getSelectedBeer(this.id).subscribe(item => ((this.items = item),
                (this.abv = this.items[0].abv),
                this.beersService.getSimilarBeers(this.abv).subscribe(similar => (this.similarItems = similar)
                // console.log(this.similarItems))
                )));
        }
        else {
            this.idError = true;
        }
    }
    isInFavourites(beer) {
        return this.favouritesService.isInFavourites(beer);
    }
    updateFavourites(beer) {
        this.favouritesService.updateFavourites(beer);
    }
    isInCart(beer) {
        return this.cartService.isInCart(beer);
    }
    updateCart(beer) {
        this.cartService.updateCart(beer);
    }
};
BeerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-beer-details',
        template: __webpack_require__(/*! raw-loader!./beer-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/beer-details/beer-details.component.html"),
        styles: [__webpack_require__(/*! ./beer-details.component.css */ "./src/app/components/beer-details/beer-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_favourites_service__WEBPACK_IMPORTED_MODULE_3__["FavouritesService"],
        src_app_services_beers_service__WEBPACK_IMPORTED_MODULE_4__["BeersService"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], BeerDetailsComponent);



/***/ }),

/***/ "./src/app/components/beer-list/beer-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/beer-list/beer-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".base-colours {\r\n  background-color: #292826;\r\n  color: #f9d342;\r\n}\r\n\r\n.beers-list {\r\n  display: grid;\r\n  justify-items: center;\r\n  grid-template-columns: repeat(auto-fill, minmax(30vh, 1fr));\r\n  grid-gap: 3.5vh 1vw;\r\n}\r\n\r\n.beers-list img {\r\n  display: block;\r\n  margin: auto;\r\n  padding: 0 5px;\r\n  height: 30vh;\r\n}\r\n\r\n.bottom-right {\r\n  position: absolute;\r\n  right: 1vmax;\r\n  bottom: 0.5vmax;\r\n}\r\n\r\n.bottom-text {\r\n  position: absolute;\r\n  bottom: 9.5vh;\r\n}\r\n\r\nbutton {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.card-box {\r\n  height: 55vh;\r\n  width: 30vh;\r\n}\r\n\r\n.content {\r\n  padding: 1vh !important;\r\n}\r\n\r\n.favourite-button:hover {\r\n  background-color: transparent;\r\n}\r\n\r\n.favourite-button:focus {\r\n  background-color: transparent;\r\n}\r\n\r\n.message {\r\n  position: absolute;\r\n  left: 6.5vh;\r\n  top: 3vh;\r\n}\r\n\r\n.meta {\r\n  font-size: 2vh !important;\r\n}\r\n\r\n.title {\r\n  font-size: 2.5vh;\r\n}\r\n\r\n.title:hover {\r\n  color: #f9d342;\r\n}\r\n\r\n.turn-yellow {\r\n  color: #292826;\r\n}\r\n\r\n.under-header {\r\n  position: fixed;\r\n  top: 12vh;\r\n  left: 15vw;\r\n}\r\n\r\n.viewport {\r\n  height: 80vh;\r\n  width: 80vw !important;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.yellow-text {\r\n  color: #f9d342;\r\n}\r\n\r\n@media only screen and (min-width: 500px) and (max-width: 1100px) {\r\n  .beers-list {\r\n    grid-template-columns: repeat(auto-fill, minmax(25vh, 1fr));\r\n    grid-gap: 3.5vh 1vw;\r\n  }\r\n\r\n  .card-box {\r\n    height: 55vh;\r\n    width: 25vh;\r\n  }\r\n\r\n  .under-header {\r\n    left: 20vw;\r\n  }\r\n\r\n  .viewport {\r\n    width: 80vw !important;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n  .card-box {\r\n    width: 70vw;\r\n  }\r\n\r\n  .under-header {\r\n    left: 30vw;\r\n    top: 12vh;\r\n  }\r\n\r\n  .viewport {\r\n    height: 100vh;\r\n    width: 80vw !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iZWVyLWxpc3QvYmVlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsMkRBQTJEO0VBQzNELG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSwyREFBMkQ7SUFDM0QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsU0FBUztFQUNYOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iZWVyLWxpc3QvYmVlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzZS1jb2xvdXJzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyODI2O1xyXG4gIGNvbG9yOiAjZjlkMzQyO1xyXG59XHJcblxyXG4uYmVlcnMtbGlzdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzB2aCwgMWZyKSk7XHJcbiAgZ3JpZC1nYXA6IDMuNXZoIDF2dztcclxufVxyXG5cclxuLmJlZXJzLWxpc3QgaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG59XHJcblxyXG4uYm90dG9tLXJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDF2bWF4O1xyXG4gIGJvdHRvbTogMC41dm1heDtcclxufVxyXG5cclxuLmJvdHRvbS10ZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA5LjV2aDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1ib3gge1xyXG4gIGhlaWdodDogNTV2aDtcclxuICB3aWR0aDogMzB2aDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDF2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmF2b3VyaXRlLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mYXZvdXJpdGUtYnV0dG9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA2LjV2aDtcclxuICB0b3A6IDN2aDtcclxufVxyXG5cclxuLm1ldGEge1xyXG4gIGZvbnQtc2l6ZTogMnZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyLjV2aDtcclxufVxyXG5cclxuLnRpdGxlOmhvdmVyIHtcclxuICBjb2xvcjogI2Y5ZDM0MjtcclxufVxyXG5cclxuLnR1cm4teWVsbG93IHtcclxuICBjb2xvcjogIzI5MjgyNjtcclxufVxyXG5cclxuLnVuZGVyLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTJ2aDtcclxuICBsZWZ0OiAxNXZ3O1xyXG59XHJcblxyXG4udmlld3BvcnQge1xyXG4gIGhlaWdodDogODB2aDtcclxuICB3aWR0aDogODB2dyAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLnllbGxvdy10ZXh0IHtcclxuICBjb2xvcjogI2Y5ZDM0MjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIC5iZWVycy1saXN0IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1dmgsIDFmcikpO1xyXG4gICAgZ3JpZC1nYXA6IDMuNXZoIDF2dztcclxuICB9XHJcblxyXG4gIC5jYXJkLWJveCB7XHJcbiAgICBoZWlnaHQ6IDU1dmg7XHJcbiAgICB3aWR0aDogMjV2aDtcclxuICB9XHJcblxyXG4gIC51bmRlci1oZWFkZXIge1xyXG4gICAgbGVmdDogMjB2dztcclxuICB9XHJcblxyXG4gIC52aWV3cG9ydCB7XHJcbiAgICB3aWR0aDogODB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIC5jYXJkLWJveCB7XHJcbiAgICB3aWR0aDogNzB2dztcclxuICB9XHJcblxyXG4gIC51bmRlci1oZWFkZXIge1xyXG4gICAgbGVmdDogMzB2dztcclxuICAgIHRvcDogMTJ2aDtcclxuICB9XHJcblxyXG4gIC52aWV3cG9ydCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDgwdncgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/beer-list/beer-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/beer-list/beer-list.component.ts ***!
  \*************************************************************/
/*! exports provided: BeerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerListComponent", function() { return BeerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_beers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/beers.service */ "./src/app/services/beers.service.ts");
/* harmony import */ var _services_favourites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/favourites.service */ "./src/app/services/favourites.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");





let BeerListComponent = class BeerListComponent {
    constructor(beersService, favouritesService, cartService) {
        this.beersService = beersService;
        this.favouritesService = favouritesService;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.beers = [];
        this.allBeers = [];
        this.page = 1;
        this.showLoader = true;
        this.filters = this.beersService.getFilters();
        // console.log(this.filters);
        this.updatePage();
    }
    updateFilter() {
        this.ngOnInit();
    }
    updatePage() {
        // Random beer.
        if (this.filters.includes('random')) {
            this.beersService
                .getBeers(this.page, 'random')
                .subscribe(items => (this.beers = items));
        }
        // Beers selected by name.
        else if (this.filters.includes('name')) {
            this.beersService
                .getBeers(this.page, 'name')
                .subscribe(items => (this.beers = items));
        }
        // If 'random' is not selected.
        else {
            this.beersService.getBeers(this.page).subscribe(items => ((this.currentBeers = items),
                this.allBeers.push(...this.currentBeers),
                (this.beers = this.beersService.filterBeers(this.allBeers)),
                this.beers.sort((a, b) => (a.id > b.id ? 1 : -1)), // Sorts the beers by id.
                // This is used when a filter only has less than 10 beers on the first page/pages.
                this.beers.length < 10
                    ? this.getNextBeers()
                    : null
            // For testing:
            // console.log(this.currentBeers),
            // console.log(this.allBeers),
            // console.log(this.beers)
            ));
            this.showLoader = false;
        }
    }
    isInFavourites(beer) {
        return this.favouritesService.isInFavourites(beer);
    }
    updateFavourites(beer) {
        this.favouritesService.updateFavourites(beer);
    }
    isInCart(beer) {
        return this.cartService.isInCart(beer);
    }
    updateCart(beer) {
        this.cartService.updateCart(beer);
    }
    getNextBeers() {
        this.page++;
        this.updatePage();
    }
    scrollHandler(e) {
        // console.log(e);
        if (e === 'bottom') {
            this.getNextBeers();
        }
    }
};
BeerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-beer-list',
        template: __webpack_require__(/*! raw-loader!./beer-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/beer-list/beer-list.component.html"),
        styles: [__webpack_require__(/*! ./beer-list.component.css */ "./src/app/components/beer-list/beer-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_beers_service__WEBPACK_IMPORTED_MODULE_2__["BeersService"],
        _services_favourites_service__WEBPACK_IMPORTED_MODULE_3__["FavouritesService"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
], BeerListComponent);



/***/ }),

/***/ "./src/app/components/cart/cart.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/cart/cart.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\r\n  color: #292826;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.button:hover {\r\n  color: #f9d342;\r\n}\r\n\r\n.checkout-button {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.content-container {\r\n  width: 30vw;\r\n  text-align: left;\r\n}\r\n\r\n.divider {\r\n  left: 70% !important;\r\n}\r\n\r\n.grid {\r\n  margin: 0 !important;\r\n  justify-content: center;\r\n  height: 68vh;\r\n}\r\n\r\n.header {\r\n  padding: 1vh 3vh 1vh 0;\r\n  font-size: 3vh;\r\n}\r\n\r\n.image-container {\r\n  width: 8vw;\r\n}\r\n\r\nimg {\r\n  height: 15vh;\r\n}\r\n\r\n.inverted-colours {\r\n  background-color: #f9d342 !important;\r\n  color: #292826;\r\n}\r\n\r\n.inverted-colours:hover {\r\n  background-color: #292826 !important;\r\n  color: #f9d342;\r\n}\r\n\r\n.item {\r\n  padding: 1vh !important;\r\n}\r\n\r\n.item-quantity {\r\n  position: relative;\r\n  top: 2vh;\r\n  height: 2.5vh;\r\n  width: 10vw;\r\n  font-size: 1.5vh;\r\n}\r\n\r\nlabel {\r\n  font-size: 1.5vh !important;\r\n  padding: 1vh 0 0 0 !important;\r\n}\r\n\r\n.narrow-column {\r\n  width: 28% !important;\r\n  height: 67vh;\r\n  margin-left: 2%;\r\n  padding: 0 !important;\r\n}\r\n\r\n.remove-button {\r\n  font-size: 1.4vh;\r\n}\r\n\r\n.title {\r\n  position: relative;\r\n  top: 49%;\r\n  font-size: 4.5vh;\r\n}\r\n\r\n.top-header {\r\n  position: fixed;\r\n  top: 12vh;\r\n  left: 15vmax;\r\n  display: inline-flex;\r\n  padding: 1vh;\r\n  z-index: 2;\r\n}\r\n\r\n.turn-yellow {\r\n  color: #292826;\r\n  font-size: 2.5vh;\r\n}\r\n\r\n.turn-yellow:hover {\r\n  color: #f9d342;\r\n}\r\n\r\n.under-header {\r\n  position: fixed;\r\n  top: 20vh;\r\n  left: 16vw;\r\n  height: 70vh;\r\n  width: 80vw;\r\n  justify-content: center;\r\n}\r\n\r\n.viewport {\r\n  height: 66vh;\r\n  width: 107%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.wide-column {\r\n  width: 70% !important;\r\n  overflow-x: hidden;\r\n  padding-left: 0 !important;\r\n}\r\n\r\n.yellow-text {\r\n  color: #f9d342;\r\n  font-size: 2vh !important;\r\n}\r\n\r\n@media only screen and (min-width: 500px) and (max-width: 1100px) {\r\n  .button {\r\n    padding: 0 !important;\r\n  }\r\n\r\n  .content-container {\r\n    width: 25vw;\r\n  }\r\n\r\n  .divider {\r\n    font-size: 1.2vh;\r\n  }\r\n\r\n  img {\r\n    height: 13vh;\r\n  }\r\n\r\n  .submit-button {\r\n    padding: 0.78571429em 1.5em 0.78571429em !important;\r\n  }\r\n\r\n  .title {\r\n    font-size: 2.3vh;\r\n  }\r\n\r\n  .viewport {\r\n    width: 115%;\r\n  }\r\n\r\n  .under-header {\r\n    left: 20vw;\r\n    width: 78vw;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n  .content-container {\r\n    width: 23vw;\r\n    margin: 0 !important;\r\n  }\r\n\r\n  .form-container {\r\n    width: 60vw;\r\n  }\r\n\r\n  .image-container {\r\n    width: 16vw;\r\n  }\r\n\r\n  .title {\r\n    font-size: 2.5vh;\r\n  }\r\n\r\n  .viewport {\r\n    height: 55vh;\r\n    width: 122%;\r\n  }\r\n\r\n  .under-header {\r\n    left: 15.5vh;\r\n    width: 65vw;\r\n    height: 73vh;\r\n    overflow-x: hidden;\r\n    padding-left: 0 !important;\r\n    padding-right: 0 !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsbURBQW1EO0VBQ3JEOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0VBQzdCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcbiAgY29sb3I6ICMyOTI4MjY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6ICNmOWQzNDI7XHJcbn1cclxuXHJcbi5jaGVja291dC1idXR0b24ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICB3aWR0aDogMzB2dztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgbGVmdDogNzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDY4dmg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDF2aCAzdmggMXZoIDA7XHJcbiAgZm9udC1zaXplOiAzdmg7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA4dnc7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG59XHJcblxyXG4uaW52ZXJ0ZWQtY29sb3VycyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZDM0MiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMjkyODI2O1xyXG59XHJcblxyXG4uaW52ZXJ0ZWQtY29sb3Vyczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjgyNiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZjlkMzQyO1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgcGFkZGluZzogMXZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtLXF1YW50aXR5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAydmg7XHJcbiAgaGVpZ2h0OiAyLjV2aDtcclxuICB3aWR0aDogMTB2dztcclxuICBmb250LXNpemU6IDEuNXZoO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxLjV2aCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDF2aCAwIDAgMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmFycm93LWNvbHVtbiB7XHJcbiAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNjd2aDtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVtb3ZlLWJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxLjR2aDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA0OSU7XHJcbiAgZm9udC1zaXplOiA0LjV2aDtcclxufVxyXG5cclxuLnRvcC1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDEydmg7XHJcbiAgbGVmdDogMTV2bWF4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHBhZGRpbmc6IDF2aDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4udHVybi15ZWxsb3cge1xyXG4gIGNvbG9yOiAjMjkyODI2O1xyXG4gIGZvbnQtc2l6ZTogMi41dmg7XHJcbn1cclxuXHJcbi50dXJuLXllbGxvdzpob3ZlciB7XHJcbiAgY29sb3I6ICNmOWQzNDI7XHJcbn1cclxuXHJcbi51bmRlci1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDIwdmg7XHJcbiAgbGVmdDogMTZ2dztcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi52aWV3cG9ydCB7XHJcbiAgaGVpZ2h0OiA2NnZoO1xyXG4gIHdpZHRoOiAxMDclO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLndpZGUtY29sdW1uIHtcclxuICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ueWVsbG93LXRleHQge1xyXG4gIGNvbG9yOiAjZjlkMzQyO1xyXG4gIGZvbnQtc2l6ZTogMnZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAuYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMjV2dztcclxuICB9XHJcblxyXG4gIC5kaXZpZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ydmg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAxM3ZoO1xyXG4gIH1cclxuXHJcbiAgLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgcGFkZGluZzogMC43ODU3MTQyOWVtIDEuNWVtIDAuNzg1NzE0MjllbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMi4zdmg7XHJcbiAgfVxyXG5cclxuICAudmlld3BvcnQge1xyXG4gICAgd2lkdGg6IDExNSU7XHJcbiAgfVxyXG5cclxuICAudW5kZXItaGVhZGVyIHtcclxuICAgIGxlZnQ6IDIwdnc7XHJcbiAgICB3aWR0aDogNzh2dztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAuY29udGVudC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDIzdnc7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNjB2dztcclxuICB9XHJcblxyXG4gIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDE2dnc7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyLjV2aDtcclxuICB9XHJcblxyXG4gIC52aWV3cG9ydCB7XHJcbiAgICBoZWlnaHQ6IDU1dmg7XHJcbiAgICB3aWR0aDogMTIyJTtcclxuICB9XHJcblxyXG4gIC51bmRlci1oZWFkZXIge1xyXG4gICAgbGVmdDogMTUuNXZoO1xyXG4gICAgd2lkdGg6IDY1dnc7XHJcbiAgICBoZWlnaHQ6IDczdmg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");




let CartComponent = class CartComponent {
    constructor(cartService, route) {
        this.cartService = cartService;
        this.route = route;
        this.items = this.cartService.getItems();
        route.params.subscribe(params => (this.link = params['cart-link']));
        // console.log(this.link);
    }
    ngOnInit() {
        this.deviceWidth = window.innerWidth;
    }
    removeBeer(beer) {
        this.cartService.removeFromCart(beer);
    }
    addToCart(beer) {
        this.cartService.addToCart(beer);
    }
    clearCart() {
        this.cartService.clearCart();
        window.location.reload();
    }
};
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/components/cart/cart.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], CartComponent);



/***/ }),

/***/ "./src/app/components/client-details.ts":
/*!**********************************************!*\
  !*** ./src/app/components/client-details.ts ***!
  \**********************************************/
/*! exports provided: ClientDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetails", function() { return ClientDetails; });
class ClientDetails {
    constructor(firstName, lastName, address, country, cardType, cardNumber, cvc, expirationMonth, expirationYear, apartment, items, orderDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.country = country;
        this.cardType = cardType;
        this.cardNumber = cardNumber;
        this.cvc = cvc;
        this.expirationMonth = expirationMonth;
        this.expirationYear = expirationYear;
        this.apartment = apartment;
        this.items = items;
        this.orderDate = orderDate;
    }
}


/***/ }),

/***/ "./src/app/components/favourites/favourites.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/favourites/favourites.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".base-colours {\n  background-color: #292826;\n  color: #f9d342;\n}\n\n.bottom-button {\n  padding: 1vh 1vh;\n}\n\nbutton {\n  background-color: transparent !important;\n}\n\n.cards {\n  margin: 0;\n}\n\n.inverted-colours {\n  background-color: #f9d342 !important;\n  color: #292826 !important;\n}\n\n.inverted-colours:hover {\n  background-color: #292826;\n  color: #f9d342;\n}\n\n.inverted-colours:focus {\n  background-color: #292826;\n  color: #f9d342;\n}\n\n.reset-button {\n  font-size: 1.5vh;\n}\n\n.top-header {\n  position: fixed;\n  top: 14vh;\n  left: 17vmax;\n  z-index: 2;\n}\n\n.turn-yellow {\n  color: #292826;\n}\n\n.viewport {\n  position: fixed;\n  top: 20vh;\n  left: 17vw;\n  height: 80vh;\n  width: 80vw !important;\n  overflow-y: scroll;\n}\n\n.yellow-text {\n  color: #f9d342;\n}\n\n@media only screen and (min-width: 500px) and (max-width: 1100px) {\n  .viewport {\n    left: 20vw;\n    width: 75vw !important;\n    height: 75vh;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .viewport {\n    left: 30vw;\n    width: 70vw !important;\n    height: 75vh;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvdXJpdGVzL2Zhdm91cml0ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXZvdXJpdGVzL2Zhdm91cml0ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNlLWNvbG91cnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyODI2O1xuICBjb2xvcjogI2Y5ZDM0Mjtcbn1cblxuLmJvdHRvbS1idXR0b24ge1xuICBwYWRkaW5nOiAxdmggMXZoO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZHMge1xuICBtYXJnaW46IDA7XG59XG5cbi5pbnZlcnRlZC1jb2xvdXJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZDM0MiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzI5MjgyNiAhaW1wb3J0YW50O1xufVxuXG4uaW52ZXJ0ZWQtY29sb3Vyczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI4MjY7XG4gIGNvbG9yOiAjZjlkMzQyO1xufVxuXG4uaW52ZXJ0ZWQtY29sb3Vyczpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI4MjY7XG4gIGNvbG9yOiAjZjlkMzQyO1xufVxuXG5cbi5yZXNldC1idXR0b24ge1xuICBmb250LXNpemU6IDEuNXZoO1xufVxuXG5cbi50b3AtaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDE0dmg7XG4gIGxlZnQ6IDE3dm1heDtcbiAgei1pbmRleDogMjtcbn1cblxuLnR1cm4teWVsbG93IHtcbiAgY29sb3I6ICMyOTI4MjY7XG59XG5cbi52aWV3cG9ydCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyMHZoO1xuICBsZWZ0OiAxN3Z3O1xuICBoZWlnaHQ6IDgwdmg7XG4gIHdpZHRoOiA4MHZ3ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnllbGxvdy10ZXh0IHtcbiAgY29sb3I6ICNmOWQzNDI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLnZpZXdwb3J0IHtcbiAgICBsZWZ0OiAyMHZ3O1xuICAgIHdpZHRoOiA3NXZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA3NXZoO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnZpZXdwb3J0IHtcbiAgICBsZWZ0OiAzMHZ3O1xuICAgIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA3NXZoO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/favourites/favourites.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/favourites/favourites.component.ts ***!
  \***************************************************************/
/*! exports provided: FavouritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesComponent", function() { return FavouritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_favourites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/favourites.service */ "./src/app/services/favourites.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");




let FavouritesComponent = class FavouritesComponent {
    constructor(favouritesService, cartService) {
        this.favouritesService = favouritesService;
        this.cartService = cartService;
    }
    ngOnInit() {
        // console.log(localStorage.getItem('favourites'));
        this.items = this.favouritesService.getItems();
    }
    removeBeer(beer) {
        this.favouritesService.removeFromFavourites(beer);
    }
    isInCart(beer) {
        return this.cartService.isInCart(beer);
    }
    updateCart(beer) {
        this.cartService.updateCart(beer);
    }
    clearFavourites() {
        this.favouritesService.clearFavourites();
        window.location.reload();
    }
};
FavouritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favourites',
        template: __webpack_require__(/*! raw-loader!./favourites.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/favourites/favourites.component.html"),
        styles: [__webpack_require__(/*! ./favourites.component.css */ "./src/app/components/favourites/favourites.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favourites_service__WEBPACK_IMPORTED_MODULE_2__["FavouritesService"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
], FavouritesComponent);



/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".base-colours {\r\n  background-color: #292826;\r\n  color: #f9d342;\r\n}\r\n\r\n.full-container {\r\n  height: 50vh;\r\n  width: 50vw !important;\r\n}\r\n\r\n.right-floated {\r\n  float: right;\r\n}\r\n\r\n.small-container {\r\n  height: 10vh;\r\n  width: 50vw !important;\r\n}\r\n\r\n.subtitle {\r\n  font-size: 3vh;\r\n}\r\n\r\n.title {\r\n  font-size: 7vh;\r\n}\r\n\r\n.under-header {\r\n  position: relative;\r\n  left: 20vw;\r\n  top: 10vh;\r\n  width: 70vw;\r\n}\r\n\r\n.yellow-text {\r\n  color: #f9d342;\r\n}\r\n\r\n@media only screen and (min-width: 500px) and (max-width: 1100px) {\r\n  .subtitle {\r\n    font-size: 2vh;\r\n  }\r\n\r\n  .under-header {\r\n    left: 20vw;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n  .full-container {\r\n    width: 60vw !important;\r\n  }\r\n\r\n  .small-container {\r\n    width: 60vw !important;\r\n  }\r\n\r\n  .subtitle {\r\n    font-size: 2vh;\r\n  }\r\n\r\n  .title {\r\n    font-size: 4.5vh;\r\n  }\r\n\r\n  .under-header {\r\n    left: 26vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2UtY29sb3VycyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjgyNjtcclxuICBjb2xvcjogI2Y5ZDM0MjtcclxufVxyXG5cclxuLmZ1bGwtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgd2lkdGg6IDUwdncgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJpZ2h0LWZsb2F0ZWQge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnNtYWxsLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIHdpZHRoOiA1MHZ3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzdmg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiA3dmg7XHJcbn1cclxuXHJcbi51bmRlci1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAyMHZ3O1xyXG4gIHRvcDogMTB2aDtcclxuICB3aWR0aDogNzB2dztcclxufVxyXG5cclxuLnllbGxvdy10ZXh0IHtcclxuICBjb2xvcjogI2Y5ZDM0MjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDJ2aDtcclxuICB9XHJcblxyXG4gIC51bmRlci1oZWFkZXIge1xyXG4gICAgbGVmdDogMjB2dztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAuZnVsbC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDYwdncgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zbWFsbC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDYwdncgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDJ2aDtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDQuNXZoO1xyXG4gIH1cclxuXHJcbiAgLnVuZGVyLWhlYWRlciB7XHJcbiAgICBsZWZ0OiAyNnZ3O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingPageComponent = class LandingPageComponent {
    constructor() { }
    ngOnInit() { }
};
LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: __webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/landing-page.component.html"),
        styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/components/landing-page/landing-page.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LandingPageComponent);



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover {\n  background-color: #f9d342 !important;\n  color: #292826 !important;\n}\n\n.background-gradient {\n  background: linear-gradient(\n    180deg,\n    #0d0c0c 0%,\n    #0d0c0c 10%,\n    #292826 90%\n  ) !important;\n}\n\n.base-colours {\n  color: #f9d342 !important;\n  background-color: transparent;\n}\n\n.button {\n  text-align: start;\n}\n\n.favourites {\n  font-size: 2vh;\n}\n\n.fixed-header {\n  height: 100vh;\n  width: 14vmax !important;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  padding: 1px;\n  border: 0;\n}\n\n.input {\n  height: 5vh;\n}\n\n.inverted-colours {\n  background-color: #f9d342;\n  color: #292826;\n}\n\n.inverted-colours:hover {\n  background-color: transparent;\n  color: #f9d342;\n}\n\n.menu {\n  margin: 0;\n  border: 0;\n}\n\n.right-button {\n  position: fixed;\n  left: 15vmax;\n}\n\n.search-bar {\n  width: 45vmin;\n  position: fixed;\n  left: 15vmax;\n}\n\n.small-text {\n  font-size: 1.8vh !important;\n  padding: 0.2vh;\n}\n\n.title {\n  font-size: 3vh;\n  padding-left: 0 !important;\n}\n\n.top-background {\n  background: linear-gradient(270deg, #292826 0%, #292826 10%, #0d0c0c 65%);\n}\n\n.top-bar {\n  height: 10vh;\n  width: 100vw;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 2;\n}\n\n@media only screen and (max-width: 450px) {\n  .right-button {\n    padding: 0 !important;\n  }\n\n  .search-bar {\n    padding:  0 1vw 0 0 !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTs7Ozs7Y0FLWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWQzNDIgIWltcG9ydGFudDtcbiAgY29sb3I6ICMyOTI4MjYgIWltcG9ydGFudDtcbn1cblxuLmJhY2tncm91bmQtZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTgwZGVnLFxuICAgICMwZDBjMGMgMCUsXG4gICAgIzBkMGMwYyAxMCUsXG4gICAgIzI5MjgyNiA5MCVcbiAgKSAhaW1wb3J0YW50O1xufVxuXG4uYmFzZS1jb2xvdXJzIHtcbiAgY29sb3I6ICNmOWQzNDIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idXR0b24ge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLmZhdm91cml0ZXMge1xuICBmb250LXNpemU6IDJ2aDtcbn1cblxuLmZpeGVkLWhlYWRlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxNHZtYXggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyOiAwO1xufVxuXG4uaW5wdXQge1xuICBoZWlnaHQ6IDV2aDtcbn1cblxuLmludmVydGVkLWNvbG91cnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlkMzQyO1xuICBjb2xvcjogIzI5MjgyNjtcbn1cblxuLmludmVydGVkLWNvbG91cnM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmOWQzNDI7XG59XG5cbi5tZW51IHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbi5yaWdodC1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDE1dm1heDtcbn1cblxuLnNlYXJjaC1iYXIge1xuICB3aWR0aDogNDV2bWluO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDE1dm1heDtcbn1cblxuLnNtYWxsLXRleHQge1xuICBmb250LXNpemU6IDEuOHZoICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAuMnZoO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDN2aDtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi50b3AtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMyOTI4MjYgMCUsICMyOTI4MjYgMTAlLCAjMGQwYzBjIDY1JSk7XG59XG5cbi50b3AtYmFyIHtcbiAgaGVpZ2h0OiAxMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5yaWdodC1idXR0b24ge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zZWFyY2gtYmFyIHtcbiAgICBwYWRkaW5nOiAgMCAxdncgMCAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_beers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/beers.service */ "./src/app/services/beers.service.ts");



let NavBarComponent = class NavBarComponent {
    constructor(beersService) {
        this.beersService = beersService;
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.abv = ['weak', 'medium', 'strong'];
        this.ibu = ['low', 'normal', 'high'];
    }
    ngOnInit() {
        this.deviceWidth = window.innerWidth;
        // console.log(this.deviceWidth);
    }
    filterSelected(filter) {
        return this.beersService.containsFilter(filter);
    }
    handleInput(event) {
        this.beersService.resetFilters();
        this.beersService.setName(event.target.value);
        this.selectFilter('name');
    }
    selectFilter(filter) {
        if (filter === 'reset') {
            this.beersService.resetFilters();
        }
        else {
            if (this.beersService.containsFilter(filter)) {
                this.beersService.removeFilter(filter);
            }
            else {
                if (filter === 'random') {
                    this.beersService.resetFilters();
                }
                else {
                    this.beersService.removeFilter('random');
                }
                this.beersService.addFilter(filter);
            }
        }
        this.clickEvent.emit(filter);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavBarComponent.prototype, "clickEvent", void 0);
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_beers_service__WEBPACK_IMPORTED_MODULE_2__["BeersService"]])
], NavBarComponent);



/***/ }),

/***/ "./src/app/components/order-form/order-form.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/order-form/order-form.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-text {\r\n  color: red;\r\n}\r\n\r\n.black-text {\r\n  color: #292826;\r\n  font-size: 1.5vh;\r\n  padding: 0.5vh;\r\n}\r\n\r\n.bottom-left {\r\n  position: absolute;\r\n  top: 62vh;\r\n}\r\n\r\n.checkout-button {\r\n  padding: 1vh;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n  right: 1vh;\r\n  top: 1vh;\r\n  font-size: 4.5vh;\r\n  color: #292826;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.checkout-button:hover {\r\n  color: #f9d342;\r\n}\r\n\r\n.divider {\r\n  left: 70.4% !important;\r\n}\r\n\r\n.form-container {\r\n  width: 95%;\r\n  padding-left: 5%;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.full-container {\r\n  height: 70vh;\r\n}\r\n\r\n.grid {\r\n  height: 70vh !important;\r\n}\r\n\r\n.inverted-colours {\r\n  background-color: #f9d342 !important;\r\n  color: #292826;\r\n}\r\n\r\n.inverted-colours:hover {\r\n  background-color: #292826 !important;\r\n  color: #f9d342;\r\n}\r\n\r\n.narrow-column {\r\n  width: 28% !important;\r\n  height: 67vh;\r\n  padding: 0 !important;\r\n}\r\n\r\n.sub-header {\r\n  font-size: 2vh;\r\n  padding: 1vh 0;\r\n}\r\n\r\n.viewport {\r\n  height:60vh;\r\n  width: 70vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.wide-column {\r\n  width: 70% !important;\r\n  overflow-x: hidden;\r\n  padding-left: 0 !important;\r\n}\r\n\r\n.yellow-text {\r\n  color: #f9d342;\r\n  font-size: 3vh !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1mb3JtL29yZGVyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29yZGVyLWZvcm0vb3JkZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LXRleHQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5ibGFjay10ZXh0IHtcclxuICBjb2xvcjogIzI5MjgyNjtcclxuICBmb250LXNpemU6IDEuNXZoO1xyXG4gIHBhZGRpbmc6IDAuNXZoO1xyXG59XHJcblxyXG4uYm90dG9tLWxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYydmg7XHJcbn1cclxuXHJcbi5jaGVja291dC1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDF2aDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OiAxdmg7XHJcbiAgdG9wOiAxdmg7XHJcbiAgZm9udC1zaXplOiA0LjV2aDtcclxuICBjb2xvcjogIzI5MjgyNjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2hlY2tvdXQtYnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogI2Y5ZDM0MjtcclxufVxyXG5cclxuLmRpdmlkZXIge1xyXG4gIGxlZnQ6IDcwLjQlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLmZ1bGwtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICBoZWlnaHQ6IDcwdmggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmludmVydGVkLWNvbG91cnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWQzNDIgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzI5MjgyNjtcclxufVxyXG5cclxuLmludmVydGVkLWNvbG91cnM6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI4MjYgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2Y5ZDM0MjtcclxufVxyXG5cclxuLm5hcnJvdy1jb2x1bW4ge1xyXG4gIHdpZHRoOiAyOCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDY3dmg7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3ViLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAydmg7XHJcbiAgcGFkZGluZzogMXZoIDA7XHJcbn1cclxuXHJcbi52aWV3cG9ydCB7XHJcbiAgaGVpZ2h0OjYwdmg7XHJcbiAgd2lkdGg6IDcwdmg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ud2lkZS1jb2x1bW4ge1xyXG4gIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi55ZWxsb3ctdGV4dCB7XHJcbiAgY29sb3I6ICNmOWQzNDI7XHJcbiAgZm9udC1zaXplOiAzdmggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/order-form/order-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/order-form/order-form.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function() { return OrderFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _client_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-details */ "./src/app/components/client-details.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");





let OrderFormComponent = class OrderFormComponent {
    constructor(cartService, orderService) {
        this.cartService = cartService;
        this.orderService = orderService;
        this.countries = [
            'United States',
            'United Kingdom',
            'Romania',
            'Germany',
            'France'
        ];
        this.cardTypes = ['Visa', 'American Express', 'MasterCard'];
        this.months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        this.model = new _client_details__WEBPACK_IMPORTED_MODULE_2__["ClientDetails"]('Jane', 'Doe', 'Sunshine Str. 1', this.countries[0], this.cardTypes[0], 8888888888888888, 888, this.months[0], 2019, 'Apartment 1');
        this.submitted = false;
    }
    clearCart() {
        this.cartService.clearCart();
        window.location.reload();
    }
    onSubmit() {
        this.submitted = true;
        this.model.items = this.cartService.getItems();
        // console.log(this.model.items);
    }
    submitForm() {
        //  console.log('Your order has been submitted', this.model);
        window.alert('Your order has been submitted');
        // console.log(localStorage.getItem('orders'));
        this.orderService.updateOrders(this.model);
        // console.log(localStorage.getItem('orders'));
        this.clearCart();
    }
};
OrderFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-form',
        template: __webpack_require__(/*! raw-loader!./order-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/order-form/order-form.component.html"),
        styles: [__webpack_require__(/*! ./order-form.component.css */ "./src/app/components/order-form/order-form.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]])
], OrderFormComponent);



/***/ }),

/***/ "./src/app/directives/scrollable.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/scrollable.directive.ts ***!
  \****************************************************/
/*! exports provided: ScrollableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollableDirective", function() { return ScrollableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScrollableDirective = class ScrollableDirective {
    constructor(element) {
        this.element = element;
        this.scrollPosition = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onScroll(event) {
        try {
            const top = event.target.scrollTop;
            const height = this.element.nativeElement.scrollHeight;
            const offset = this.element.nativeElement.offsetHeight;
            if (top > height - offset - 1) {
                this.scrollPosition.emit('bottom');
                // console.log('bottom');
            }
        }
        catch (err) { }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ScrollableDirective.prototype, "scrollPosition", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('scroll', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ScrollableDirective.prototype, "onScroll", null);
ScrollableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appScrollable]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ScrollableDirective);



/***/ }),

/***/ "./src/app/services/beers.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/beers.service.ts ***!
  \*******************************************/
/*! exports provided: BeersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersService", function() { return BeersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BeersService = class BeersService {
    constructor(http) {
        this.http = http;
        this.API_PATH = 'https://api.punkapi.com/v2';
        this.MAX_PER_PAGE = 20;
        this.filters = localStorage.getItem('filters')
            ? JSON.parse(localStorage.getItem('filters'))
            : [];
    }
    /**
     * Returns an array containing only the selected beer.
     *
     * @param id - the id of the beer (integer between 1-325)
     */
    getSelectedBeer(id) {
        return this.http.get(`${this.API_PATH}/beers/${id}`);
    }
    // Beer name provided by the user.
    setName(name) {
        this.name = name.replace(/\s+/g, '_');
    }
    getFilters() {
        // console.log(this.filters);
        return this.filters;
    }
    containsFilter(filter) {
        // console.log(this.filters.includes(filter));
        return this.filters.includes(filter);
    }
    addFilter(filter) {
        let exists = false;
        if (this.filters.length) {
            for (let i = 0; i < this.filters.length && !exists; i++) {
                if (filter === this.filters[i]) {
                    exists = true;
                }
            }
        }
        if (!exists) {
            this.filters.push(filter);
        }
        localStorage.setItem('filters', JSON.stringify(this.filters));
        // console.log('storage-filters');
        // console.log(localStorage.getItem('filters'));
    }
    removeFilter(filter) {
        for (let i = 0; i < this.filters.length; i++) {
            if (filter === this.filters[i]) {
                this.filters.splice(i, 1);
            }
        }
        localStorage.setItem('filters', JSON.stringify(this.filters));
        // console.log('storage-filters');
        // console.log(localStorage.getItem('filters'));
    }
    resetFilters() {
        this.filters = [];
        localStorage.setItem('filters', JSON.stringify(this.filters));
        // console.log('storage-filters');
        // console.log(localStorage.getItem('filters'));
    }
    /**
     * Returns array of beer objects based on the filter and the page number.
     *
     * @param page - the current page
     * @param filter the selected filter
     */
    getBeers(page, filter) {
        // Response object is JSON by default.
        // Do not map response to response.json(), gives error
        switch (filter) {
            case 'random':
                return this.http.get(`${this.API_PATH}/beers/random`);
            case 'name':
                // If the name is empty, goes to default.
                if (this.name) {
                    return this.http.get(`${this.API_PATH}/beers?beer_name=${this.name}`);
                }
            default:
                return this.http.get(`${this.API_PATH}/beers?page=${page}&per_page=${this.MAX_PER_PAGE}`);
        }
    }
    // Filters the beers based on the selected filters.
    filterBeers(beers) {
        let filteredBeers = beers;
        if (this.filters.length) {
            if (this.filters.includes('weak') ||
                this.filters.includes('medium') ||
                this.filters.includes('strong')) {
                filteredBeers = this.filterABV(filteredBeers);
            }
            if (this.filters.includes('low') ||
                this.filters.includes('normal') ||
                this.filters.includes('high')) {
                filteredBeers = this.filterIBU(filteredBeers);
            }
        }
        // console.log(filteredBeers);
        return filteredBeers;
    }
    // Filtering based on the ABV property.
    filterABV(beers) {
        const filteredBeers = [];
        for (const filter of this.filters) {
            switch (filter) {
                case 'weak': {
                    filteredBeers.push(...beers.filter(beer => beer.abv < 5));
                    break;
                }
                case 'medium': {
                    filteredBeers.push(...beers.filter(beer => beer.abv >= 5 && beer.abv <= 10));
                    break;
                }
                case 'strong': {
                    filteredBeers.push(...beers.filter(beer => beer.abv > 10));
                    break;
                }
            }
        }
        return filteredBeers;
    }
    // Filtering based on the IBU property.
    filterIBU(beers) {
        const filteredBeers = [];
        for (const filter of this.filters) {
            switch (filter) {
                case 'low': {
                    filteredBeers.push(...beers.filter(beer => beer.ibu < 15));
                    break;
                }
                case 'normal': {
                    filteredBeers.push(...beers.filter(beer => beer.ibu >= 15 && beer.ibu <= 80));
                    break;
                }
                case 'high': {
                    filteredBeers.push(...beers.filter(beer => beer.ibu > 80));
                    break;
                }
            }
        }
        return filteredBeers;
    }
    getSimilarBeers(abv) {
        return this.http.get(`${this.API_PATH}/beers?per_page=12&abv_gt=${abv - 1}&abv_lt${abv + 1}`);
    }
};
BeersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], BeersService);



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartService = class CartService {
    constructor() {
        this.items = localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : [];
    }
    isInCart(beer) {
        let exists = false;
        if (this.items.length) {
            for (let i = 0; i < this.items.length && !exists; i++) {
                if (beer.id === this.items[i].id) {
                    exists = true;
                }
            }
        }
        return exists;
    }
    updateCart(beer) {
        this.isInCart(beer) ? this.removeFromCart(beer) : this.addToCart(beer);
    }
    addToCart(beer) {
        const exists = this.isInCart(beer);
        if (!exists) {
            beer.quantity = 1;
            this.items.push(beer);
        }
        // console.log(this.items);
        localStorage.setItem('cart', JSON.stringify(this.items));
        // console.log('storage');
        // console.log(localStorage.getItem('cart'));
    }
    /**
     * Removes both the beer and the id.
     */
    removeFromCart(beer) {
        for (let i = 0; i < this.items.length; i++) {
            if (beer.id === this.items[i].id) {
                this.items.splice(i, 1);
            }
        }
        // console.log(this.items);
        localStorage.setItem('cart', JSON.stringify(this.items));
        // console.log('storage');
        // console.log(localStorage.getItem('cart'));
    }
    getItems() {
        // console.log(localStorage.getItem('cart'));
        return this.items;
    }
    /**
     * Resets the beers and the ids and updates the favourites page.
     */
    clearCart() {
        this.items = [];
        localStorage.setItem('cart', JSON.stringify(this.items));
    }
};
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CartService);



/***/ }),

/***/ "./src/app/services/favourites.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/favourites.service.ts ***!
  \************************************************/
/*! exports provided: FavouritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesService", function() { return FavouritesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FavouritesService = class FavouritesService {
    constructor() {
        this.items = localStorage.getItem('favourites')
            ? JSON.parse(localStorage.getItem('favourites'))
            : [];
    }
    // Checks if the specified beer was already added to favourites.
    isInFavourites(beer) {
        let exists = false;
        if (this.items.length) {
            for (let i = 0; i < this.items.length && !exists; i++) {
                if (beer.id === this.items[i].id) {
                    exists = true;
                }
            }
        }
        return exists;
    }
    /**
     * Updates the favourites based on whether the beer is already a favourite or not.
     *
     * @param beer - the selected beer
     */
    updateFavourites(beer) {
        this.isInFavourites(beer)
            ? this.removeFromFavourites(beer)
            : this.addToFavourites(beer);
    }
    addToFavourites(beer) {
        const exists = this.isInFavourites(beer);
        if (!exists) {
            this.items.push(beer);
        }
        // console.log(this.items);
        localStorage.setItem('favourites', JSON.stringify(this.items));
        // console.log('storage');
        // console.log(localStorage.getItem('favourites'));
    }
    /**
     * Removes both the beer.
     */
    removeFromFavourites(beer) {
        for (let i = 0; i < this.items.length; i++) {
            if (beer.id === this.items[i].id) {
                this.items.splice(i, 1);
            }
        }
        // console.log(this.items);
        localStorage.setItem('favourites', JSON.stringify(this.items));
        // console.log('storage');
        // console.log(localStorage.getItem('favourites'));
    }
    getItems() {
        // console.log(localStorage.getItem('favourites'));
        return this.items;
    }
    /**
     * Resets the beers and updates the favourites page.
     */
    clearFavourites() {
        this.items = [];
        localStorage.setItem('favourites', JSON.stringify(this.items));
    }
};
FavouritesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FavouritesService);



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderService = class OrderService {
    constructor() {
        this.orders = localStorage.getItem('orders')
            ? JSON.parse(localStorage.getItem('orders'))
            : [];
    }
    getCurrentDate() {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        let date = '';
        day < 10 ? (date = '0' + day) : (date += day);
        month < 10 ? (date = date + '/0' + month) : (date = date + '/' + month);
        date = date + '/' + year;
        return date;
    }
    updateOrders(order) {
        order.orderDate = this.getCurrentDate();
        this.orders.push(order);
        localStorage.setItem('orders', JSON.stringify(this.orders));
    }
    getOrders() {
        return this.orders;
    }
};
OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], OrderService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\angular\beers-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map