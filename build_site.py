import os, re, yaml
root = os.path.dirname(__file__)
with open(os.path.join(root, '_config.yml'), 'r', encoding='utf-8') as f:
    cfg = yaml.safe_load(f)
site = {k:str(v) for k,v in cfg.items() if not isinstance(v,(dict,list))}
patterns = {f"{{{{ site.{k} }}}}":v for k,v in site.items()}
for base, _, files in os.walk(root):
    for fn in files:
        if fn.endswith('.html'):
            path = os.path.join(base, fn)
            with open(path, 'r', encoding='utf-8') as f:
                txt = f.read()
            txt = re.sub(r'^---\s*\n---\s*\n', '', txt)
            for k,v in patterns.items():
                txt = txt.replace(k, v)
            with open(path, 'w', encoding='utf-8') as f:
                f.write(txt)
print('Done')
