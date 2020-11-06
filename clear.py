#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# Time: 2020/11/01 17:42:15
# Contact: androllen#hotmail.com
import os
from os import getcwd
import time

def main():
    """
    docstring
    """

    # fp = os.path.dirname(os.path.abspath(__file__))
    # print(fp)
    # print(os.name)
    # print(os.getenv('os'))
    # print(getcwd())
    # time_start = time.time()  # 开始计时
    removefile(os.path.join(getcwd(), 'node_modules'))
    # time_end = time.time()  # 结束计时
    # time_c = time_end - time_start  # 运行所花时间
    # print('time cost', time_c, 's')


def removefile(rmfolder):
    _listdir = os.listdir(rmfolder)
    for _item in _listdir:
        subpath = os.path.join(rmfolder, _item)
        if os.path.isdir(subpath):
            removefile(subpath)
        else:
            os.remove(subpath)
            print(subpath)

    os.rmdir(rmfolder)


if __name__ == "__main__":
    main()
