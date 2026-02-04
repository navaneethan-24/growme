"use client"
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams, GridColumnHeaderParams } from '@mui/x-data-grid';
import { Checkbox, Chip, IconButton, MenuItem, Pagination, PaginationItem, Select, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const rows = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  mobile: `+91 9${Math.floor(100000000 + Math.random() * 900000000)}`,
  groups: i % 2 === 0 ? ['Customers'] : ['Leads'],
  tags: i % 3 === 0 ? ['Premium'] : ['Active'],
  lastEngagement: `${i + 1} days ago`,
}));

  
const SortIcon = () => <Image src="/sortgrid.png" alt="sort" width={12} height={12} />;

export default function DataGrid() {
  const { value: rowsPerPage, page, setValue, setPage, totalPages, rowCounts, getVisiblePages } = useRowCountStore();
  const visiblePages = getVisiblePages(rows.length);
  

  const renderHeaderWithSort = (params: GridColumnHeaderParams) => (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {params.colDef.headerName}
      <SortIcon />
    </Box>
  );

  const columns: GridColDef[] = [
    {
      field: 'name', headerName: 'Name', flex: 1, headerAlign: 'center', align: 'center',
      renderHeader: renderHeaderWithSort,
    },
    {
      field: 'mobile', headerName: 'Mobile Number', flex: 1, headerAlign: 'center', align: 'center',
      renderHeader: renderHeaderWithSort,
    },
    {
      field: 'groups', headerName: 'Groups', flex: 1, headerAlign: 'center', align: 'center',
      renderHeader: renderHeaderWithSort,
      renderCell: (params: GridRenderCellParams<string[]>) => (
        <Box sx={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: 0.5, flexWrap: 'wrap', width: '100%', height: '100%',
        }}>
          {params.value?.map((group: string, idx: number) => (
            <Chip
              key={idx}
              label={group}
              size="small"
              sx={{ backgroundColor: '#FFFFFF', color: '#717579' }}
            />
          ))}
        </Box>
      ),
    },
    {
      field: 'tags',
      headerName: 'Tags',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderHeader: renderHeaderWithSort,
      renderCell: (params: GridRenderCellParams<string[]>) => (
        <Box
          sx={{
            width: '100%', height: '100%',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            gap: 0.5, flexWrap: 'wrap',
          }}
        >
          {params.value?.map((tag: string, idx: number) => (
            <Chip
              key={idx}
              label={tag}
              size="small"
              sx={{ backgroundColor: '#FFFFFF', color: '#717579' }}
            />
          ))}
        </Box>
      ),
    },
    {
      field: 'lastEngagement', headerName: 'Last Engagement', flex: 1, headerAlign: 'center', align: 'center',
      renderHeader: renderHeaderWithSort,
    },
    {
      field: 'actions', headerName: 'Actions', flex: 1, headerAlign: 'center', align: 'center',
      renderHeader: renderHeaderWithSort,
      renderCell: (params: GridRenderCellParams<any, any>) => {
        const actions = [
          {
            src: '/comgrid.png',
            alt: 'comment',
            title: 'comment',
            onClick: () => console.log('comment', params.row.name),
          },
          {
            src: '/statusgrid.png',
            alt: 'status',
            title: 'status',
            onClick: () => console.log('status', params.row.name),
          },
          {
            src: '/editgrid.png',
            alt: 'edit',
            title: 'Edit',
            onClick: () => console.log('Edit', params.row.name),
          },
          {
            src: '/delgrid.png',
            alt: 'del',
            title: 'delete',
            onClick: () => console.log('delete', params.row.name),
          },


        ];

        return (
          <Box sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: "100%", height: "100%", gap: 1, borderRadius: "50px"
          }}>
            {actions.map((action, idx) => (
              <Tooltip key={idx} title={action.title} >
                <IconButton onClick={action.onClick}
                  sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, backgroundColor: "#FFFFFF" }}>
                  <Image src={action.src} alt={action.alt} width={"15"} height={"15"} style={{ objectFit: "contain" }} />
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Box sx={{ height: "100%", width: '100%', px: 2 }}>
        <DataGrid
          sx={{
            "& .MuiDataGrid-row": {
              backgroundColor: "#FFFFFF",
            },
            "& .MuiDataGrid-cell": {
              display: "inline-flex", alignItems: "center", justifyContent: "center", bgcolor: "#FFFFFF", fontSize: "13px",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontSize: "15px", fontWeight: "semi-bold",
            },
            "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within": {
              outline: "none",
            },
            "& .MuiDataGrid-columnSeparator": {
              display: "none",
            },
            "& .MuiDataGrid-sortIcon": {
              display: "none",
            },
            "& .MuiCheckbox-root": {
              color: "red", borderRadius: "50px",
            },
          }}

          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
          checkboxSelection
          disableRowSelectionOnClick
          autoHeight
          disableColumnMenu
          disableColumnResize
          hideFooter
          rowHeight={65}
          paginationModel={{ page: page - 1, pageSize: rowsPerPage }}
          onPaginationModelChange={(model) => {
            setPage(model.page + 1);
            setValue(model.pageSize);
          }}
          slots={{
            baseCheckbox: (props: any) => (
              <Checkbox
                {...props}
                sx={{ padding: 0 }}
                icon={<Image src="/checkbx.png" width={20} height={20} alt="unchecked" />}
                checkedIcon={<Image src="/checkbx.png" width={20} height={20} alt="checked" />}
                indeterminateIcon={<Image src="/checkbx.png" width={20} height={20} alt="indeterminate" />}
              />
            ),
          }}
        />
        {/* contact footer */}
        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItem: "center", gap: 5, mt: 2 }}>
          {/* page result */}
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 3, }}>
            <Typography sx={{ fontSize: "12px", color: '#717579' }}>  Rows per page:</Typography>
            <Select value={rowsPerPage} onChange={(e) => setValue(Number(e.target.value))}
              IconComponent={(props) => <KeyboardArrowDownOutlinedIcon {...props}
                sx={{ color: '#FF6501 !important', fontSize: "25px" }} />}
              sx={{
                width: "80px", height: "38px", backgroundColor: "#FFFFFF", borderRadius: "30px",
                fontSize: "15px", textAlign: 'center'
              }}>
              {rowCounts.map((count: number) => (
                <MenuItem key={count} value={count} >
                  {count}
                </MenuItem>
              ))}
            </Select>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, }}>
              <Typography sx={{ fontSize: "14px" }}>{rows.length} </Typography>
              <Typography sx={{ fontSize: "14px" }}>results</Typography>
            </Box>
          </Box>

          {/* pagination */}
          <Box>
            <Box display="flex" justifyContent="center" mt={2}>
              <Pagination
                count={4}
                page={page}
                onChange={(e, val) => setPage(val)}
                renderItem={(item) => (
                  <PaginationItem
                    {...item}
                    slots={{
                      previous: () => (
                        <Box sx={{ px: 3, py: 1, border: "1px solid rgba(255, 101, 1, 0.2)", borderRadius: "12px", fontSize: "15px", fontweight: 500, color: "#FF6501", textTransform: "none" }} display="flex" alignItems="center" justifyContent="center" gap={1}>
                          <Box sx={{ width: 20, height: 20, position: "relative" }}>
                            <Image src="/pageprvbtn.png" alt="next" fill style={{ objectFit: "contain" }} />
                          </Box>
                          Previous
                        </Box>
                      ),
                      next: () => (
                        <Box sx={{ px: 3, py: 1, border: "1px solid rgba(255, 101, 1, 0.2)", borderRadius: "12px", fontSize: "15px", fontweight: 500, color: "#FF6501", textTransform: "none" }} display="flex" alignItems="center" justifyContent="center" gap={1}>
                          Next
                          <Box sx={{ width: 20, height: 20, position: "relative" }}>
                            <Image src="/pagenxtbtn.png" alt="next" fill style={{ objectFit: "contain" }} />
                          </Box>
                        </Box>
                      ),
                    }}
                    sx={{
                      color: "#202020",
                      fontWeight: 500,
                      transition: "none !important",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "transparent",
                        boxShadow: "none",  
                      },
                      "&.Mui-selected": {
                        backgroundColor: "#FF6501",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#FF6501",
                        },
                      },
                      "&.MuiPaginationItem-previousNext": {
                        transition: "none !important",
                        "&:hover": {
                          backgroundColor: "transparent",
                          boxShadow: "none",
                        },
                      },

                    }}
                  />


                )}
              />



            </Box>
          </Box>

        </Box>


      </Box>
    </Box>
  );
} 