(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    Jrdj: function(t, e, a) {},
    SCSV: function(t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, "default", function() {
          return S;
        }),
        a.d(e, "pageQuery", function() {
          return T;
        });
      var n = a("wTIg"),
        o = (a("q1tI"), a("bVdm")),
        r = a("+ZDr"),
        i = a.n(r),
        c = a("41ul"),
        l = a("pREe"),
        d = a("qKvR"),
        b = Object(n.a)("ul", { target: "ev5t19a0" })({
          name: "1v4fomi",
          styles: "list-style-type:none;margin:0;padding:0;width:100%;"
        }),
        s = Object(n.a)("li", { target: "ev5t19a1" })(
          "display:inline-block;margin:",
          Object(c.a)(1 / 4),
          " ",
          Object(c.a)(1 / 4),
          ";padding:",
          Object(c.a)(1 / 6),
          " ",
          Object(c.a)(0.5),
          ";background-color:",
          function(t) {
            return Object(l.a)(t.title, 92.5, 35);
          },
          ";border:2px solid ",
          function(t) {
            return Object(l.a)(t.title, 92.5, 35);
          },
          ";color:",
          function(t) {
            return Object(l.a)(t.title, 35, 40);
          },
          ";transition:all 150ms ease-in-out;font-size:",
          Object(c.a)(0.5),
          ";font-weight:bold;&:first-of-type{margin-left:0;}&:hover{background-color:transparent;border-color:",
          function(t) {
            return Object(l.a)(t.title, 35, 40);
          },
          ";}"
        ),
        m = Object(n.a)(i.a, { target: "ev5t19a2" })({
          name: "1unrqcp",
          styles: "color:inherit;text-decoration:none;"
        }),
        g = Object(n.a)("h3", { target: "ev5t19a3" })(
          "display:block;text-transform:uppercase;margin:0;padding-top:",
          Object(c.a)(1 / 4),
          ";font-size:",
          Object(c.a)(0.5),
          ";line-height:",
          Object(c.a)(1),
          ";"
        );
      function p(t) {
        var e = t.list,
          a = void 0 === e ? [] : e;
        return a && 0 !== a.length
          ? Object(d.c)(
              b,
              null,
              Object(d.c)(g, null, "More about…"),
              a.map(function(t) {
                return Object(
                  d.c
                )(s, { key: t, title: t }, Object(d.c)(m, { to: "/tags/" + t }, t));
              })
            )
          : null;
      }
      var u = a("9eSz"),
        j = a.n(u),
        f = a("PWSB"),
        O = Object(n.a)("div", { target: "e14grdvc0" })(
          "display:flex;margin:",
          Object(c.a)(1),
          " auto;margin-bottom:0;justify-content:space-between;align-items:center;position:relative;@media only screen and (min-width:768px){max-width:75%;}"
        ),
        h = Object(n.a)(j.a, { target: "e14grdvc1" })({
          name: "hmral",
          styles: "border-radius:100%;"
        }),
        x = Object(n.a)("div", { target: "e14grdvc2" })(
          "display:flex;flex-direction:column;justify-content:flex-start;margin:0 ",
          Object(c.a)(0.5),
          ";@media only screen and (min-width:768px){margin:0 ",
          Object(c.a)(1),
          ";}"
        ),
        v = Object(n.a)("h1", { target: "e14grdvc3" })(
          "margin:0;padding:0;padding-bottom:",
          Object(c.a)(1 / 4),
          ";font-size:",
          Object(c.a)(1),
          ";color:#002635;text-transform:uppercase;line-height:",
          Object(c.a)(1),
          ";"
        ),
        w = Object(n.a)("span", { target: "e14grdvc4" })({
          name: "pelz90",
          styles: "font-weight:400;"
        }),
        y = Object(n.a)("p", { target: "e14grdvc5" })({
          name: "17hen4x",
          styles: "margin-bottom:0;color:#444;"
        });
      function k(t) {
        var e = t.image;
        return Object(d.c)(
          O,
          null,
          e && Object(d.c)("div", null, Object(d.c)(h, e)),
          Object(d.c)(
            x,
            null,
            Object(d.c)(v, null, "Dustin ", Object(d.c)(w, null, "Schau")),
            Object(d.c)(
              y,
              null,
              "Front-end development is my passion, and I am incredibly lucky to be able to ",
              Object(d.c)("strong", null, "love"),
              " what I do each and every day."
            )
          ),
          Object(d.c)(f.a, null)
        );
      }
      var z = a("rHVn"),
        q = a("dya7"),
        M = (a("Jrdj"),
        Object(n.a)("div", { target: "e12edmec0" })(
          "max-width:100%;transform:translateY(16px) scale(0.99);transform-origin:50% 0;opacity:0;animation:",
          q.c,
          " 0.3s cubic-bezier(0.39,0.575,0.565,1) forwards;twitterwidget,.twitter-tweet{margin:1rem auto;}"
        ));
      function S(t) {
        var e = t.data,
          a = void 0 === e ? {} : e,
          n = t.pageContext,
          r = a.markdownRemark,
          i = n.next,
          c = n.prev,
          l = r.frontmatter.excerpt ? r.frontmatter.excerpt : r.excerpt,
          b = r.frontmatter.featured
            ? r.frontmatter.featured.image.resize
            : null,
          s = [
            { name: "og:type", content: "article" },
            { name: "twitter:label1", content: "Reading time" },
            { name: "twitter:data1", content: r.timeToRead + " min read" },
            { name: "article:published_time", content: r.frontmatter.rawDate }
          ];
        return Object(d.c)(
          M,
          null,
          Object(d.c)(z.a, {
            title: r.frontmatter.title,
            description: l,
            image: b,
            meta: s
          }),
          Object(d.c)(
            o.a,
            {
              className: "blog-post",
              html: r.html,
              date: r.frontmatter.date,
              linkTo: r.frontmatter.link || "/",
              title: r.frontmatter.title,
              next: i,
              prev: c
            },
            Object(d.c)(p, { list: r.frontmatter.tags }),
            Object(d.c)(k, { image: a.image.childImageSharp })
          )
        );
      }
      var T = "2922792517";
    },
    bVdm: function(t, e, a) {
      "use strict";
      var n = a("wx14"),
        o = a("zLVn"),
        r = a("wTIg"),
        i = (a("q1tI"), a("41ul")),
        c = a("NIcq"),
        l = a("+ZDr"),
        d = a.n(l),
        b = a("pREe"),
        s = a("qKvR"),
        m = Object(r.a)("div", { target: "e12dpnxt0" })(
          "display:flex;width:100%;justify-content:center;z-index:1;background:",
          function(t) {
            return Object(b.a)(t.title);
          },
          ";color:white;position:relative;padding-top:",
          Object(i.a)(1),
          ";padding-bottom:",
          Object(i.a)(1.5),
          ";transition:background-color 125ms ease-in-out;@media only screen and (min-width:768px){padding:",
          Object(i.a)(1.75),
          " 0;}",
          function(t) {
            return (function(t) {
              return t.to
                ? "\n      cursor: pointer;\n      &:hover {\n        background: " +
                    Object(b.a)(t.title, 30, 100) +
                    ";\n      }\n    "
                : "";
            })(t);
          },
          ";"
        ),
        g = Object(r.a)("h1", { target: "e12dpnxt1" })(
          "display:block;margin:0;font-family:Bitter,Georgia,serif;font-size:",
          Object(i.a)(1),
          ";line-height:",
          Object(i.a)(1.5),
          ";@media only screen and (min-width:768px){padding:",
          Object(i.a)(0.5),
          " 0;border-top:4px solid #fff;border-bottom:4px solid #fff;font-size:",
          Object(i.a)(1.5),
          ";line-height:",
          Object(i.a)(2),
          ";}"
        ),
        p = Object(r.a)(d.a, { target: "e12dpnxt2" })({
          name: "1kqqukm",
          styles: "display:block;color:inherit;text-decoration:none;width:100%;"
        });
      function u(t) {
        var e = t.children,
          a = t.title,
          n = t.to,
          o = function() {
            return Object(s.c)(
              m,
              { title: a, to: n },
              Object(s.c)(g, { className: "post-title" }, a),
              e
            );
          };
        return n
          ? Object(s.c)(p, { to: n }, Object(s.c)(o, null))
          : Object(s.c)(o, null);
      }
      var j = a("HMBR"),
        f = Object(r.a)("h2", { target: "e1jo4vs90" })(
          "position:absolute;bottom:8px;left:50%;transform:translateX(-50%);margin:0;padding:0;color:rgba(255,255,255,0.9);font-size:",
          Object(i.a)(3 / 4),
          ";font-weight:400;z-index:2;"
        );
      function O(t) {
        var e = t.date;
        return Object(s.c)(f, null, e);
      }
      var h = Object(r.a)("div", { target: "e1qme9cv0" })(
        "display:flex;padding-bottom:",
        Object(i.a)(1 / 4),
        ";"
      );
      function x(t) {
        var e = t.date,
          a = t.isPost,
          n = t.next,
          o = t.prev,
          r = t.title;
        return Object(s.c)(
          h,
          null,
          Object(s.c)(function() {
            return a
              ? Object(s.c)(
                  "div",
                  null,
                  o &&
                    Object(s.c)(
                      j.a,
                      { title: r, to: o.fields.slug, prev: !0 },
                      o.frontmatter.title
                    ),
                  n &&
                    Object(s.c)(
                      j.a,
                      { title: r, to: n.fields.slug, next: !0 },
                      n.frontmatter.title
                    )
                )
              : null;
          }, null),
          Object(s.c)(O, { date: e })
        );
      }
      var v = Object(r.a)(d.a, { target: "e1e7nvd60" })(
          "display:inline-block;background-color:white;padding:",
          Object(i.a)(1 / 3),
          " ",
          Object(i.a)(1),
          ";font-size:",
          Object(i.a)(3 / 4),
          ";font-weight:bold;text-decoration:none;text-align:center;text-transform:uppercase;border-width:2px;border-style:solid;transition:all 125ms ease-in-out;",
          function(t) {
            return (function(t) {
              var e = Object(b.a)(t.title);
              return (
                "\n      background-color: " +
                e +
                ";\n      color: white;\n      border-color: " +
                e +
                ";\n      &:hover {\n        color: " +
                e +
                ";\n        background-color: white;\n      }\n    "
              );
            })(t);
          },
          ";"
        ),
        w = Object(r.a)("section", { target: "e1mv0xp60" })(
          "position:relative;width:100%;background-color:white;box-shadow:0 0 4px 1px rgba(0,0,0,0.2);background-color:white;outline:1px solid rgba(0,0,0,0.125);box-shadow:0 0 4px 1px rgba(0,0,0,0.2);box-sizing:border-box;display:flex;flex-direction:column;align-items:center;padding-bottom:",
          Object(i.a)(1),
          ";:last-child{border-bottom-width:0;}@media only screen and (min-width:768px){margin-bottom:",
          function(t) {
            return t.preview ? Object(i.a)(2) : 0;
          },
          ";padding-bottom:",
          Object(i.a)(2),
          ";}h1.post-title{text-align:center;font-weight:700;display:inline-block;}"
        ),
        y = Object(r.a)("div", { target: "e1mv0xp61" })(
          "max-width:100%;padding:",
          Object(i.a)(3 / 4),
          " ",
          Object(i.a)(1),
          ";@media only screen and (min-width:768px){padding:",
          Object(i.a)(1),
          " ",
          Object(i.a)(2),
          ";padding-top:",
          Object(i.a)(1),
          ";}"
        ),
        k = Object(r.a)("div", { target: "e1mv0xp62" })(
          "> h2{color:#333;margin:",
          Object(i.a)(1 / 4),
          " 0;padding:",
          Object(i.a)(1 / 4),
          " 0;border-bottom:2px solid #ddd;font-weight:400;}> h3{display:inline-block;color:#444;margin:",
          Object(i.a)(1 / 6),
          " 0;padding:",
          Object(i.a)(1 / 6),
          ";padding-left:0;border-bottom:1px solid #ddd;font-weight:400;}> p{margin:",
          Object(i.a)(3 / 4),
          " auto;color:#333;line-height:",
          Object(i.a)(1.25),
          ";}a:not(.anchor){display:inline;color:#d85d15;position:relative;text-decoration:none;padding:2px;transition:all 175ms ease-in-out;:before,:after{content:'';position:absolute;left:0;right:0;width:100%;height:1px;background-color:#d85d15;}:after{bottom:-2px;transition:200ms ease-out;}:before{top:-2px;transform:translateY(24px);opacity:0;transition:200ms ease-out;}:hover{background-color:rgba(216,93,21,0.05);:before{transform-origin:center top;transform:translateY(0) scaleX(1.025);opacity:1;}:after{transform-origin:center bottom;transform:scaleX(1.025);}}}> blockquote{margin-left:0.75rem;padding-left:1.5rem;border-left:4px solid #ddd;}> video.responsive{max-width:100%;max-height:100%;}.gatsby-code-title{margin-bottom:-0.6rem;padding:0.5em 1em;font-family:Consolas,'Andale Mono WT','Andale Mono','Lucida Console','Lucida Sans Typewriter','DejaVu Sans Mono','Bitstream Vera Sans Mono','Liberation Mono','Nimbus Mono L',Monaco,'Courier New',Courier,monospace;background-color:black;color:white;z-index:0;border-top-left-radius:0.3em;border-top-right-radius:0.3em;}.gatsby-code-title + .gatsby-highlight{border-top-left-radius:0;border-top-right-radius:0;}.gatsby-highlight-code-line{background-color:#0e0e0e;display:block;margin-right:-1em;margin-left:-1em;padding-right:1em;padding-left:0.75em;border-left:0.25em solid #96cbfe;}.gatsby-highlight{background-color:#1d1f21;border-radius:0.3em;margin:0.5em 0;padding:1em;overflow:auto;}.gatsby-highlight pre[class*='language-']{margin:0;padding:0;overflow:initial;float:left;min-width:100%;}"
        ),
        z = Object(r.a)("hr", { target: "e1mv0xp63" })(
          "border:0;width:75%;margin:",
          Object(i.a)(0.5),
          " auto;border-bottom:1px solid #eee;"
        ),
        q = Object(r.a)(c.a, { target: "e1mv0xp64" })({
          name: "hcljyb",
          styles: "font-size:32px;margin-right:0.5rem;"
        }),
        M = Object(r.a)("span", { target: "e1mv0xp65" })({
          name: "70qvj9",
          styles: "display:flex;align-items:center;"
        });
      e.a = function(t) {
        var e = t.children,
          a = t.className,
          r = t.date,
          i = t.html,
          c = t.linkTo,
          l = t.title,
          d = t.next,
          b = t.prev,
          m = Object(o.a)(t, [
            "children",
            "className",
            "date",
            "html",
            "linkTo",
            "title",
            "next",
            "prev"
          ]),
          g = function(t, e) {
            return void 0 === e && (e = null), "/" === c ? t : e;
          };
        return Object(s.c)(
          w,
          Object(n.a)({ className: ["post"].concat(a || []).join(" ") }, m),
          Object(s.c)(
            u,
            { title: l, to: g(void 0, c) },
            Object(s.c)(x, {
              title: l,
              date: r,
              isPost: g(!0, !1),
              linkTo: c,
              next: d,
              prev: b
            })
          ),
          Object(s.c)(
            y,
            null,
            Object(s.c)(k, { dangerouslySetInnerHTML: { __html: i } }),
            e,
            Object(s.c)(z, null)
          ),
          Object(s.c)(
            v,
            { to: c, title: l },
            g(
              Object(s.c)(M, null, Object(s.c)(q, null), "All posts"),
              "Read more"
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=component---node-modules-dschau-gatsby-theme-blog-src-templates-blog-post-js-c95db1745cf7c392042c.js.map
